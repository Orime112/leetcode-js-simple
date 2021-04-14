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

/**
 *
 * @param {Array} data
 */
function printTree(data) {
  // * 先生成parent建立父子关系
  const obj = {}
  data.forEach((item) => {
    obj[item.id] = item
  })
  // * obj -> {1001: {id: 1001, parentId: 0, name: 'AA'}, 1002: {...}}
  // console.log(obj, "obj")
  const parentList = []
  data.forEach((item) => {
    if (obj[item.parentId]) {
      // * 当前项有父节点
      obj[item.parentId].children = obj[item.parentId].children || []
      obj[item.parentId].children.push(item)
    } else {
      // * 当前项没有父节点 -> 顶层
      parentList.push(item)
    }
  })
  // * parentList -> [{id: 1001, parentId: 0, name: 'AA', children: [{name: 'BB', ...}, {name: 'CC', ...}]}]
  // * 层序遍历打印
  let layer = 0
  const printRes = (array) => {
    array.forEach((ary) => {
      console.log("  ".repeat(layer) + ary.name)
      if (ary.children) {
        layer++
        printRes(ary.children)
      }
    })
    layer--
  }
  printRes(parentList)
}

printTree(list)
