const updatedList = (options, itemSelected) => {
  const result = options.map((option) => {
    if (option.label === itemSelected.label) {
      return { ...option, active: !option.active }
    } else {
      return option
    }
  })
  return result
}

const updatedFavouriteList = (options, itemSelected) => {
  const result = options.map((option) => {
    if (option.id === itemSelected.id) {
      return { ...option, favorite: !option.favorite }
    } else {
      return option
    }
  })
  return result
}

function generateRandom(maxLimit = 999) {
  let rand = Math.random() * maxLimit
  console.log(rand) // say 99.81321410836433

  rand = Math.floor(rand) // 99

  return rand
}

const deleteSelectedItem = (options, itemId) => {
  const result = options.filter((item) => {
    return item.id !== itemId
  })
  return result
}

export { updatedList, updatedFavouriteList, generateRandom, deleteSelectedItem }
