import type { ExtractPropTypes, PropType } from 'vue'
import type { PopupDirection } from './interface'
import type { HandleEvent } from '../../_interface'

export const Props = {
  /** 绑定值，控制是否展示 */
  visible: {
    type: Boolean,
    default: (): boolean => false,
    required: true
  },
  /** 是否追加到 body */
  appendToBody: {
    type: Boolean,
    default: (): boolean => false
  },
  /** 是否展示遮罩层 */
  showMask: {
    type: Boolean,
    default: (): boolean => true
  },
  /** 是否点击遮罩层关闭 */
  maskClose: {
    type: Boolean,
    default: (): boolean => true
  },
  /** 是否模糊遮罩层 */
  maskBlur: {
    type: Boolean,
    default: (): boolean => false
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
  /** 自定义遮罩层背景色 */
  maskBackground: {
    type: String,
    default: (): null => null
  },
  /** 遮罩层透明度 */
  maskOpacity: {
    type: Number,
    default: (): null => null,
    validator: (val: number): boolean => val >= 0 && val <= 1
  },
  /**
   * 弹出位置
   *
   * @values left right top bottom center
   * @defaultValue center
   */
  direction: {
    type: String as PropType<PopupDirection>,
    default: (): PopupDirection => 'center',
    validator: (val: PopupDirection): boolean => {
      return (['left', 'right', 'top', 'bottom', 'center'] as const).includes(val)
    }
  },
  /** 弹出窗口尺寸 */
  popupSize: {
    type: [String, Number] as PropType<string | number>,
    default: (): null => null
  },
  /** 自定义内边距 */
  padding: {
    type: [String, Number] as PropType<string | number>,
    default: (): null => null
  },
  /** 打开动画开始的回调 */
  onOpen: {
    type: Function as PropType<HandleEvent>,
    default: (): null => null
  },
  /** 关闭动画开始的回调 */
  onClose: {
    type: Function as PropType<HandleEvent>,
    default: (): null => null
  },
  /** 打开动画结束的回调 */
  onOpenEnd: {
    type: Function as PropType<HandleEvent>,
    default: (): null => null
  },
  /** 关闭动画结束的回调 */
  onCloseEnd: {
    type: Function as PropType<HandleEvent>,
    default: (): null => null
  }
} as const

export type PopupProps = ExtractPropTypes<typeof Props>
