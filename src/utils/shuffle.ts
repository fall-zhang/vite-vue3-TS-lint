export default function randomArr<T>(arr: Array<T | number>) {
  const length = arr.length
  const newArr = arr.slice()
  arr.forEach((item, index) => {
    const change = Math.floor(Math.random() * length)
    const current = newArr[index]
    newArr[index] = newArr[change]
    newArr[change] = current
  })
  return newArr
}
