import type { ExtractPropTypes, PropType } from 'vue'

export const Props = {
  /** 文件列表 */
  files: {
    type: Array as PropType<File[]>,
    default: (): File[] => []
  },
  /** 接受的文件类型 */
  accept: {
    type: String,
    default: (): null => null
  },
  /**
   * 原生 name 属性
   * 
   * @see name https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input#attr-name
   */
  name: {
    type: String,
    default: (): null => null
  },
  /** 是否可拖拽上传 */
  drag: {
    type: Boolean,
    default: (): boolean => false
  },
  /** 是否可删除 */
  isRemove: {
    type: Boolean,
    default: (): boolean => true
  },
  /** 是否展示文件列表 */
  showList: {
    type: Boolean,
    default: (): boolean => true
  },
  /** 是否可多选 */
  multiple: {
    type: Boolean,
    default: (): boolean => false
  },
  /** 最大上传尺寸 */
  maxSize: {
    type: Number,
    default: (): null => null
  },
  /** 最大上传数量 */
  maxLength: {
    type: Number,
    default: (): null => null
  },
  /** 是否禁用 */
  disabled: {
    type: Boolean,
    default: (): boolean => false
  },
  /** 上传成功后执行的回调 */
  onLoad: {
    type: Function,
    default: (): null => null
  },
  /** 绑定的文件列表发生改变时触发的回调 */
  onChange: {
    type: Function,
    default: (): null => null
  }
} as const

export type UpLoadProps = ExtractPropTypes<typeof Props>
