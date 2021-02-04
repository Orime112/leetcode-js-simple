function mergeArr() {
  const arr1 = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'D1', 'D2'];
  const arr2 = ['A', 'B', 'C', 'D']
  const res = []
  let j = 0
  for (let i = 0; i < arr1.length; i++) {
    console.log(j)
    console.log(arr1[i], arr2[j], 'i 和 j');
    const val1 = arr1[i]
    if (val1.startsWith(arr2[j])) {
      res.push(val1)
    } else {
      res.push(arr2[j++])
      i--
    }
  }
  return res
}

console.log(mergeArr())


