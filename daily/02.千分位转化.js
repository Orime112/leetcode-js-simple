const num = 112345.678911

/**
 *
 * @param {Nuber} num
 */
function format(num) {
  const n = String(num)
  let [int, float] = n.split(".")
  let group = []
  let intRes = ""
  int
    .split("")
    .reverse()
    .forEach((item) => {
      group.unshift(item)
      if (group.length === 3) {
        intRes = "," + group.join("") + intRes
        group = []
      }
    })
  if (!group.length) {
    intRes = intRes.slice(1)
  } else {
    intRes = group.join("") + intRes
    group = []
  }

  let floatRes = ""
  float.split("").forEach((item) => {
    group.push(item)
    if (group.length === 3) {
      floatRes += group.join("") + ","
      group = []
    }
  })
  if (!group.length) {
    floatRes = floatRes.slice(0, floatRes.length - 1)
  } else {
    floatRes += group.join("")
  }

  return intRes + "." + floatRes
}
console.log(format(num))
