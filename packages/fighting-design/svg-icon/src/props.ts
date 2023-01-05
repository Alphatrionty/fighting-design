import type { ExtractPropTypes, PropType } from 'vue'
import type { FightingIcon, HandleMouse } from '../../_interface'

export const Props = {
  /** icon 内容 */
  icon: {
    type: Object as PropType<FightingIcon>,
    default: (): null => null
  },
  /** icon 颜色 */
  color: {
    type: String,
    default: (): null => null
  },
  /** icon 大小 */
  size: {
    type: [String, Number] as PropType<string | number>,
    default: (): null => null
  },
  /** 点击之后触发的回调 */
  onClick: {
    type: Function as PropType<HandleMouse>,
    default: (): null => null
  }
} as const

export type SvgIconProps = ExtractPropTypes<typeof Props>
