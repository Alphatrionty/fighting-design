import { setBooleanProp, setStringProp } from '../../_utils'
import type { ExtractPropTypes } from 'vue'
import type { PropType } from 'vue'

export const Props = {
  /** 水印内容 */
  content: setStringProp(),
  /** 水印的宽度 */
  width: {
    type: Number,
    default: (): number => 280
  },
  /** 水印的高度 */
  height: {
    type: Number,
    default: (): number => 200
  },
  /** 文字大小 */
  fontSize: {
    type: [String, Number] as PropType<string | number>,
    default: (): string => '30px'
  },
  /** 文字颜色 */
  fontColor: {
    type: String,
    default: (): string => '#333'
  },
  /** 自定义图片水印 */
  image: setStringProp(),
  /** 是否为块级元素 */
  block: setBooleanProp(),
  /**
   * 原生 z-index 属性
   *
   * @see z-index https://developer.mozilla.org/zh-CN/docs/Web/CSS/z-index
   */
  zIndex: {
    type: Number,
    default: (): number => 100
  }
} as const

export type WatermarkProps = ExtractPropTypes<typeof Props>
