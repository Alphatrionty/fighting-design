import Divider from './src/divider.vue'

import { install } from '../_utils'

export const FDivider = install(Divider)

export type DividerInstance = InstanceType<typeof Divider>

export * from './src/interface.d'

export default FDivider
