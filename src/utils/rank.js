/**
 * 获取当前数组的排序，或者浅层指定对象的排序
 * @returns 
 */
export const getRank = (arr,key)=>{
  const newArr = arr.map(item=>{
    let biggerThan = 1
    arr.forEach(item2=>{
      if(key){
        if(item2[key] > item[key]){
          biggerThan +=1
        }
      }else{
        if(item2 > item){
          biggerThan +=1
        }
      }
    })
    if(key){
      return {
        ...item,
        rank:biggerThan
      }
    }
    return biggerThan
  })
  return newArr
}