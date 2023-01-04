import messageVue from '../../message/src/message.vue'
import notificationVue from '../../notification/src/notification.vue'
import { render, createVNode } from 'vue'
import { useMassageManage, useRun } from '../../_hooks'
import { isString } from '../../_utils'
import type { ComponentInternalInstance, VNode } from 'vue'
import type {
  MessageInstance,
  MessageFn,
  MessageOptions,
  MessageFnWithType,
  UseMessageReturnInterface
} from './interface'
import type { MessagePlacement } from '../../message'

export * from './interface.d'

export const massageManage = useMassageManage()

export const useMessage = (target: 'message' | 'notification'): UseMessageReturnInterface => {
  let seed = 1

  /** 位置信息 */
  const defaultOptions = {
    message: { placement: 'top' },
    notification: { placement: 'top-right' }
  } as const

  /** 组件实例 */
  const componentVue = {
    message: messageVue,
    notification: notificationVue
  }

  const instance: MessageFn & Partial<MessageFnWithType> = (options: MessageOptions): MessageInstance => {
    const container: HTMLDivElement = document.createElement('div')
    const id = `message-${seed}`

    if (isString(options)) {
      options = {
        message: options
      } as MessageOptions
    }

    const props: MessageOptions = {
      id,
      ...defaultOptions[target],
      ...options
    } as const

    /** 关闭动画结束时，移除 dom */
    props.onDestroy = (): void => {
      useRun(props.onClose)
      render(null, container)
    }

    const VNode: VNode = createVNode(componentVue[target], props)

    render(VNode, container)
    document.body.appendChild(container.firstElementChild as HTMLElement)
    const vm = VNode.component as ComponentInternalInstance

    seed++
    const instance: MessageInstance = massageManage.createInstance(
      {
        id,
        vm,
        close: (): void => {
          ((vm as ComponentInternalInstance).exposed as MessageInstance).close()
        },
        bottom: 0,
        visible: 0
      },
      props.placement as MessagePlacement
    )

    return instance
  }

  const messageTypes = ['default', 'primary', 'success', 'danger', 'warning'] as const

  messageTypes.forEach((type): void => {
    instance[type] = (text: string): MessageInstance => {
      return instance({ message: text, type })
    }
  })

  return { instance } as {
    instance: MessageFn & MessageFnWithType
  }
}
