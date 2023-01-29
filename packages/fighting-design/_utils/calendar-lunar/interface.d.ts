/**
 * Lunar 类返回值类型接口
 *
 * @param { string } animal 生肖
 * @param { string } IDayCn 农历日期
 * @param { string } IMonthCn 当前月份
 * @param { string | null } Term 节气
 * @param { string } constellation 星座
 * @param { number } cDay 阳历日期
 * @param { number } cMonth 阳历月份
 * @param { number } cYear 阳历年份
 * @param { string } date 详细日期 yyyy-mm-dd
 * @param { string } festival 阳历节日
 * @param { string } gzDay 纪日
 * @param { string } gzMonth 纪月
 * @param { string } gzYear 纪年
 * @param { boolean } isLeap 是否为闰月
 * @param { boolean } lDay 农历日期
 * @param { number } lMonth 农历月份
 * @param { number } lYear 农历年份
 * @param { string } lunarDate 详细农历日期 yyyy-mm-dd
 * @param { string } lunarFestival 农历节日
 * @param { number } nWeek 小写星期
 */
export interface GetLunarDetailReturn {
  animal: string
  IDayCn: string
  IMonthCn: string
  Term: string | null
  constellation: string
  cDay: number
  cMonth: number
  cYear: number
  date: string
  festival: string
  gzDay: string
  gzMonth: string
  gzYear: string
  isLeap: boolean
  isTerm: boolean
  lDay: number
  lMonth: number
  lYear: number
  lunarDate: string
  lunarFestival: string
  nWeek: number
}

/**
 * Lunar 类的类型接口
 *
 * @param { Function } getLunarYearDays 返回农历 year 年一整年的总天数
 * @param { Function } leapMonth 返回农历 year 年闰月是哪个月；若 year 年没有闰月 则返回 0
 * @param { Function } leapDays 返回农历 year 年闰月的天数 若该年没有闰月则返回 0
 * @param { Function } monthDays 回农历 year 年 month 月（非闰月）的总天数，计算 month 为闰月时的天数请使用 leapDays 方法
 * @param { Function } toGanZhiYear 农历年份转换为干支纪年
 * @param { Function } toConstellation 公历月、日判断所属星座
 * @param { Function } toGanZhi 传入 offset 偏移量返回干支
 * @param { Function } getTerm 传入公历(!) year 年获得该年第 n 个节气的公历日期
 * @param { Function } toChinaMonth 传入农历数字月份返回汉语通俗表示法
 * @param { Function } toChinaDay 传入农历日期数字返回汉字表示法
 * @param { Function } getAnimal 年份转生肖[!仅能大致转换] => 精确划分生肖分界线是 “立春”
 * @param { Function } getLunarDetail 传入阳历年月日获得详细的信息
 */
export interface LunarInterface {
  getLunarYearDays: (year: number) => number
  leapMonth: (year: number) => number
  leapDays: (year: number) => number
  monthDays: (year: number, month: number) => number
  toGanZhiYear: (lYear: number) => string
  toConstellation: (cMonth: number, cDay: number) => string
  toGanZhi: (offset: number) => string
  getTerm: (year: number, n: number) => number
  toChinaMonth: (month: number) => string | -1
  toChinaDay: (day: number) => string
  getAnimal: (year: number) => string
  getLunarDetail: (yPara: number, mPara: number, dPara: number) => -1 | GetLunarDetailReturnInterface
}
