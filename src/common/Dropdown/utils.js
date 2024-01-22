const updatedArray = (selected, options) => {
  if (!options || !options.length) return []
  const result = options.map((option) => {
    if (selected.label === option.label) {
      return { ...option, ['active']: !option.active }
    } else return option
  })
  return result
}

const updateSingleSelect = (selected, options) => {
  if (!options || !options.length) return []
  const result = options.map((option) => {
    if (selected.label === option.label) {
      return { ...option, ['active']: true }
    } else {
      return { ...option, ['active']: false }
    }
  })
  return result
}

const totalSelected = (options) => {
  if (!options || !options.length) return 0
  const result = options.filter((option) => {
    return option.active
  })
  return result.length
}

export { updatedArray, totalSelected, updateSingleSelect }
