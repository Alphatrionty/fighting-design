import type { FightingType } from '../../_interface'

export * from './interface.d'

/**
 * useRipples 类所需要的 props 参数类型接口
 *
 * @param { number } duration 动画时长
 * @param { 'f-ripple' | 'f-button' } component 组件类型 目前仅有 button 和 ripple 组件两种类型
 * @param { string } className 涟漪节点类名
 * @param { string } ripplesColor 自定义涟漪背景色
 * @param { string } type 组件 type
 * @param { boolean } [simple] 是否为简约按钮（仅适用于按钮组件）
 * @param { boolean } [text] 是否为文字按钮（仅适用于按钮组件）
 */
export interface RipplesOptions {
  duration: number
  component: 'f-ripple' | 'f-button'
  className: string
  ripplesColor: string
  type: FightingType
  simple?: boolean
  text?: boolean
}

/**
 * ripples 方法事件类型接口
 *
 * @param { number } layerX x 轴坐标
 * @param { number } layerY y 轴坐标
 */
export interface RipplesEvt extends Event {
  layerX: number
  layerY: number
}

/**
 * ripples 返回值类型接口
 *
 * @param { Function } runRipples 生成涟漪方法
 */
export interface UseRipplesReturn {
  runRipples: () => void
}
