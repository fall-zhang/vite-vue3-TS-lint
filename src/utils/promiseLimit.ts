// // 控制并发

// const promiseLimit = (pList:Promise<any>[], limit:number) => {
//   let currentLength = 0
//   const totalLength = pList.length
//   let suttleLength = 0
//   const result:any[] = []
//   return new Promise((resolve, rejcect) => {
//     function limitPromise(singleP:Promise<any>, index:number) {
//       singleP().then(res => {
//         result[index] = res
//         suttleLength++
//         if (suttleLength === totalLength) {
//           resolve(result)
//         } else {
//           currentLength++
//           const singleP = pList.shift()
//           limitPromise(singleP, currentLength)
//         }
//       }).catch((err:any) => {
//         rejcect(err)
//       })
//     }
//     while (currentLength < limit && pList.length) {
//       const singleP = pList.shift()
//       limitPromise(singleP as Promise<any>, currentLength)
//       currentLength++
//     }
//   })
// }

// const cc = new Promise((resolve, rejcect) => {})
// if (cc) {
//   console.log(8778)
// }