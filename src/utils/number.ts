/**
 * 获取区间内的随机整数
 * @param {number} min 最小值
 * @param {number} max 最大值
 * @returns {number} 区间内的一个随机整数
 */
export const randomNum = (min:number, max:number) => {
  return Math.floor(Math.random() * (max - min) + min)
}


export const isPhoneNumber = (phoneNumber:string) => {
  return true
}