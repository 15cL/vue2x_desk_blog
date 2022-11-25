export function getRandomColor () {
  // 随机生成RGBA颜色
  const r = Math.floor(Math.random() * 256) // 随机生成256以内r值
  const g = Math.floor(Math.random() * 256) // 随机生成256以内g值
  const b = Math.floor(Math.random() * 256) // 随机生成256以内b值
  const alpha = Math.random() // 随机生成1以内a值

  const range = r * 0.299 + g * 0.587 + b * 0.115
  // 判断颜色深浅
  if (range <= 100) {
    return `rgb(${r},${g},${b},${alpha})`
  } else {
    getRandomColor()
  }
}
/*
[
  {
    id: 1,
    name: '小明'
  },
  {
    id: 2,
    name: '小s'
  }
]
*/

export function getName (arr, id) {
  let name = ''
  arr.forEach((v, i) => {
    if (id === v.id) {
      name = arr[i].name
    }
  })
  return name
}
