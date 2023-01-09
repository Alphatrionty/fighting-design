import { setBooleanProp, setStringProp } from '../../_utils'
import type { ExtractPropTypes, PropType } from 'vue'
import type { TextareaResize } from './interface'
import type { InputChange, HandleEvent } from '../../_interface'

export const Props = {
  /** 绑定值 */
  modelValue: setStringProp(),
  /**
   * 元素的输入文本的行数
   *
   * @see rows https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/textarea#attr-rows
   */
  rows: {
    type: [String, Number] as PropType<string | number>,
    default: (): number => 3
  },
  /**
   * 是否禁用
   *
   * @see disabled https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/textarea#attr-disabled
   */
  disabled: setBooleanProp(),
  /**
   * 最大输入长度
   *
   * @see maxLength https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/textarea#attr-maxlength
   */
  maxLength: {
    type: Number,
    default: (): null => null,
    validator: (val: number): boolean => val >= 0
  },
  /**
   * 是否自动获取焦点
   *
   * @see autofocus https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/textarea#attr-autofocus
   */
  autofocus: setBooleanProp(),
  /**
   * 原生 name 属性
   *
   * @see name https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/textarea#attr-name
   */
  name: {
    type: String,
    default: (): string => 'f-textarea'
  },
  /**
   * 占位符
   *
   * @see placeholder https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/textarea#attr-placeholder
   */
  placeholder: setStringProp(),
  /**
   * 是否只读
   *
   * @see readonly https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/textarea#attr-readonly
   */
  readonly: setBooleanProp(),
  /** input 事件触发的回调 */
  onInput: {
    type: Function as PropType<HandleEvent>,
    default: (): null => null
  },
  /**
   * 拉伸方式
   *
   * @see resize https://developer.mozilla.org/zh-CN/docs/Web/CSS/resize
   * @values none both horizontal vertical
   * @defaultValue none
   */
  resize: {
    type: String as PropType<TextareaResize>,
    default: (): TextareaResize => 'none',
    validator: (val: TextareaResize): boolean => {
      return (['none', 'both', 'horizontal', 'vertical'] as const).includes(val)
    }
  },
  /** 是否可清空 */
  clear: setBooleanProp(),
  /** 绑定值发生变化时触发的回调 */
  onChange: {
    type: Function as PropType<InputChange>,
    default: (): null => null
  },
  /** 失去焦点时触发的回调 */
  onBlur: {
    type: Function as PropType<HandleEvent>,
    default: (): null => null
  },
  /** 获取焦点时触发的回调 */
  onFocus: {
    type: Function as PropType<HandleEvent>,
    default: (): null => null
  }
} as const

export type TextareaProps = ExtractPropTypes<typeof Props>
