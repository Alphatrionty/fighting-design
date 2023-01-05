import type { ExtractPropTypes } from 'vue'

export const Props = {
  /** 标题 */
  title: {
    type: String,
    default: (): null => null
  }
} as const

export type MenuItemGroupProps = ExtractPropTypes<typeof Props>
