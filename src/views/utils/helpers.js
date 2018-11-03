export const applyDrag = (arr, dragResult) => {
  const { removedIndex, addedIndex, payload } = dragResult
  if (removedIndex === null && addedIndex === null) return arr

  const arrCopy = [...arr]
  let itemToAdd = payload

  if (removedIndex !== null) {
    itemToAdd = arrCopy.splice(removedIndex, 1)[0]
  }

  if (addedIndex !== null) {
    arrCopy.splice(addedIndex, 0, itemToAdd)
  }

  return arrCopy
}

export const generateItems = (count, creator) => {
  const result = []
  for (let i = 0; i < count; i++) {
    result.push(creator(i))
  }
  return result
}