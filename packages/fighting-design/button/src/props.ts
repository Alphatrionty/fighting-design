import type { PropType, ExtractPropTypes } from 'vue'
import type { ButtonTarget, ButtonNative } from './interface'
import type { FightingSize, FightingType, FightingIcon, HandleMouse } from '../../_interface'

export const Props = {
  /** 是否加粗 */
  bold: {
    type: Boolean,
    default: (): boolean => false
  },
  /** 是否为圆形 */
  circle: {
    type: Boolean,
    default: (): boolean => false
  },
  /** 是否为圆角 */
  round: {
    type: Boolean,
    default: (): boolean => false
  },
  /** 是否带有扩散效果 */
  spread: {
    type: Boolean,
    default: (): boolean => false
  },
  /** 文字大小 */
  fontSize: {
    type: [String, Number] as PropType<string | number>,
    default: (): null => null
  },
  /** 字体颜色 */
  fontColor: {
    type: String,
    default: (): null => null
  },
  /**
   * 按钮尺寸
   *
   * @values large middle small mini
   * @defaultValue null
   */
  size: {
    type: String as PropType<FightingSize>,
    default: (): null => null,
    validator: (val: FightingSize): boolean => {
      return (['large', 'middle', 'small', 'mini'] as const).includes(val)
    }
  },
  /** 是否为块级元素 */
  block: {
    type: Boolean,
    default: (): boolean => false
  },
  /** 跳转的连接地址 */
  href: {
    type: String,
    default: (): null => null
  },
  /**
   * 针对 href 处理的跳转方式
   *
   * 原生属性
   *
   * @values _blank _self _parent _top
   * @defaultValue _self
   * @see target https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/a#attr-target
   */
  target: {
    type: String as PropType<ButtonTarget>,
    default: (): ButtonTarget => '_self',
    validator: (val: ButtonTarget): boolean => {
      return (['_blank', '_self', '_parent', '_top'] as const).includes(val)
    }
  },
  /** 是否为 loading 状态 */
  loading: {
    type: Boolean,
    default: (): boolean => false
  },
  /** 是否禁用 */
  disabled: {
    type: Boolean,
    default: (): boolean => false
  },
  /** 自定义 loading icon */
  loadingIcon: {
    type: Object as PropType<FightingIcon>,
    default: (): null => null
  },
  /**
   * 按钮的类型（非自定义按钮颜色时有效）
   *
   * @values default primary success danger warning
   * @defaultValue null
   */
  type: {
    type: String as PropType<FightingType>,
    default: (): null => null,
    validator: (val: FightingType): boolean => {
      return (['default', 'primary', 'success', 'danger', 'warning'] as const).includes(val)
    }
  },
  /** 是否自动获取焦点 */
  autofocus: {
    type: Boolean,
    default: (): boolean => false
  },
  /**
   * 原生 name 属性
   * @see name https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/button#attr-name
   */
  name: {
    type: String,
    default: (): string => 'f-button'
  },
  /** 自定义阴影样式 */
  shadow: {
    type: String,
    default: (): null => null
  },
  /** 是否为文字按钮（非自定义按钮颜色时有效） */
  text: {
    type: Boolean,
    default: (): boolean => false
  },
  /**
   * 原生 type 属性
   * @values button submit reset
   * @defaultValue button
   * @see type https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/button#attr-type
   */
  nativeType: {
    type: String as PropType<ButtonNative>,
    default: (): ButtonNative => 'button',
    validator: (val: ButtonNative): boolean => {
      return (['button', 'submit', 'reset'] as const).includes(val)
    }
  },
  /** 是否为简约的按钮（非自定义按钮颜色时有效） */
  simple: {
    type: Boolean,
    default: (): boolean => false
  },
  /** 自定义之前的 icon */
  beforeIcon: {
    type: Object as PropType<FightingIcon>,
    default: (): null => null
  },
  /** 自定义之后的 icon */
  afterIcon: {
    type: Object as PropType<FightingIcon>,
    default: (): null => null
  },
  /** 是否为涟漪效果 */
  ripples: {
    type: Boolean,
    default: (): boolean => false
  },
  /** 自定义涟漪效果颜色 */
  ripplesColor: {
    type: String,
    default: (): null => null
  },
  /** 自定义按钮颜色 */
  color: {
    type: String,
    default: (): null => null
  },
  /** 点击之后的回调函数 */
  onClick: {
    type: Function as PropType<HandleMouse>,
    default: (): null => null
  }
} as const

export type ButtonProps = ExtractPropTypes<typeof Props>
