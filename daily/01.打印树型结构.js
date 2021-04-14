const list = [
  {
    id: 1001,
    parentId: 0,
    name: "AA",
  },
  {
    id: 1002,
    parentId: 1001,
    name: "BB",
  },
  {
    id: 1003,
    parentId: 1001,
    name: "CC",
  },
  {
    id: 1004,
    parentId: 1003,
    name: "DD",
  },
  {
    id: 1005,
    parentId: 1003,
    name: "EE",
  },
  {
    id: 1006,
    parentId: 1002,
    name: "FF",
  },
  {
    id: 1007,
    parentId: 1002,
    name: "GG",
  },
  {
    id: 1008,
    parentId: 1004,
    name: "HH",
  },
  {
    id: 1009,
    parentId: 1005,
    name: "II",
  },
]

// 实现树形结构打印
function printTree(data) {
  const obj = {}
  const result = []
  data.forEach((item) => {
    obj[item.id] = item
  })
  data.forEach((item) => {
    const parent = obj[item.parentId]
    if (parent) {
      parent.children = parent.children || []
      parent.children.push(item)
    } else {
      result.push(item)
    }
  })
  const res = (item) => {
    console.log(item.name)
    let pre = "  "
    let rec = (ary, p) => {
      ary.forEach((i) => {
        console.log(p + i.name)
        if (i.children) {
          rec(i.children, p + "  ")
        }
      })
    }
    rec(item.children, pre)
  }
  res(data[0])
}

printTree(list)
