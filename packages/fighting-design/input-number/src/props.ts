import type { ExtractPropTypes, PropType } from 'vue'
import type { InputNumberModel } from './interface'
import type { HandleEvent, FightingSize, InputChange } from '../../_interface'

export const Props = {
  /**
   * 绑定值
   *
   * @defaultValue 1
   */
  modelValue: {
    type: Number,
    default: (): number => 1
  },
  /**
   * 模式
   *
   * @values default button switch
   * @defaultValue default
   */
  model: {
    type: String as PropType<InputNumberModel>,
    default: (): InputNumberModel => 'default',
    validator: (val: InputNumberModel): boolean => {
      return (['default', 'button', 'switch'] as const).includes(val)
    }
  },
  /**
   * 数值精度
   *
   * @defaultValue 0
   */
  precision: {
    type: Number,
    default: (): number => 0
  },
  /**
   * 步长
   *
   * @defaultValue 1
   */
  step: {
    type: Number,
    default: (): number => 1
  },
  /**
   * 尺寸
   *
   * @values large middle small mini
   * @defaultValue middle
   */
  size: {
    type: String as PropType<FightingSize>,
    default: (): FightingSize => 'middle',
    validator: (val: FightingSize): boolean => {
      return (['large', 'middle', 'small', 'mini'] as const).includes(val)
    }
  },
  /** 是否禁用 */
  disabled: {
    type: Boolean,
    default: (): boolean => false
  },
  /** 最大值 */
  max: {
    type: Number,
    default: (): null => null
  },
  /** 最小值 */
  min: {
    type: Number,
    default: (): null => null
  },
  /** 最大输入长度 */
  maxLength: {
    type: Number,
    default: (): null => null,
    validator: (val: number): boolean => val >= 0
  },
  /** 是否自动聚焦 */
  autofocus: {
    type: Boolean,
    default: (): boolean => false
  },
  /**
   * 原生 name 属性
   *
   * @see name https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input#attr-name
   */
  name: {
    type: String,
    default: (): string => 'f-input-number'
  },
  /**
   * 占位符
   *
   * @see placeholder https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input#attr-placeholder
   */
  placeholder: {
    type: String,
    default: (): null => null
  },
  /** 是否可清除 */
  clear: {
    type: Boolean,
    default: (): boolean => false
  },
  /** 是否只读 */
  readonly: {
    type: Boolean,
    default: (): boolean => false
  },
  /** 绑定值发生改变时触发的回调 */
  onChange: {
    type: Function as PropType<InputChange>,
    default: (): null => null
  },
  /** 失去焦点时触发的回调 */
  onBlur: {
    type: Function as PropType<HandleEvent>,
    default: (): null => null
  },
  /** 获得焦点时触发的回调 */
  onFocus: {
    type: Function as PropType<HandleEvent>,
    default: (): null => null
  },
  /** input 事件触发的回调 */
  onInput: {
    type: Function as PropType<HandleEvent>,
    default: (): null => null
  }
} as const

export type InputNumberProps = ExtractPropTypes<typeof Props>
