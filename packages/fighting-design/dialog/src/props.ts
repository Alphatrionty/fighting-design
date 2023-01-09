import { setBooleanProp } from '../../_utils'
import type { ExtractPropTypes, PropType } from 'vue'
import type { HandleEvent, FightingIcon } from '../../_interface'

export const Props = {
  /** 绑定值，控制是否展示 */
  visible: {
    ...setBooleanProp(),
    required: true
  },
  /** 标题文字内容 */
  title: {
    type: String,
    default: (): null => null
  },
  /** 是否追加到 body */
  appendToBody: setBooleanProp(),
  /** 自定义宽度 */
  width: {
    type: [String, Number] as PropType<string | number>,
    default: (): null => null
  },
  /** 是否全屏展示 */
  fullscreen: setBooleanProp(),
  /** 是否展示遮罩层 */
  showMask: setBooleanProp(true),
  /** 是否点击遮罩层关闭 */
  maskClose: setBooleanProp(true),
  /** 是否模糊遮罩层 */
  maskBlur: setBooleanProp(),
  /** 是否展示关闭图标 */
  showCloseIcon: setBooleanProp(true),
  /** 自定义关闭按钮 icon */
  closeIcon: {
    type: Object as PropType<FightingIcon>,
    default: (): null => null
  },
  /**
   * 层级 原生属性
   *
   * @see z-index https://developer.mozilla.org/zh-CN/docs/Web/CSS/z-index
   */
  zIndex: {
    type: Number,
    default: (): Number => 1999,
    validator: (val: number): boolean => val >= 0
  },
  /** 打开动画开始的回调 */
  onOpen: {
    type: Function as PropType<HandleEvent>,
    default: (): null => null
  },
  /** 打开动画结束的回调 */
  onOpenEnd: {
    type: Function as PropType<HandleEvent>,
    default: (): null => null
  },
  /** 关闭动画开始的回调 */
  onClose: {
    type: Function as PropType<HandleEvent>,
    default: (): null => null
  },
  /** 关闭动画结束的回调 */
  onCloseEnd: {
    type: Function as PropType<HandleEvent>,
    default: (): null => null
  }
} as const

export type DialogProps = ExtractPropTypes<typeof Props>
