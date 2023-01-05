import type { ComponentPublicInstance, App } from 'vue'

export type { LoadingProps } from './props'

/**
 * FLoading 元素节点类型接口
 * 
 * @param vm
 * @param loadingInstance
 * @param originalPosition
 * @param style
 */
export interface LoadingElInterface extends HTMLElement {
  vm: ComponentPublicInstance
  loadingInstance: App | null
  originalPosition: string
  style: CSSStyleDeclaration
}
