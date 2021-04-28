const isValidArg = arg => type => {
  if (type === 'null') return arg === null
  if (type === 'undefined') return arg === undefined
  if (type === 'array') return true
  if (arg) return typeof arg === type.toString()
  return false
}

export const isValid = argument => (types = null) => {
  if (Array.isArray(types)) return types.some(type => isValidArg(argument)(type))
  if (isValidArg(argument)(types)) return true
  return false
}