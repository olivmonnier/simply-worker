const isValidArg = arg => type => {
  if (type === 'null') return arg === null
  if (type === 'undefined') return arg === undefined
  if (arg === type) return true;
  if (typeof arg === type) return true;
  if (type === 'array' && Array.isArray(arg)) return true;
  return false
}
export const isValid = argument => (types = null) => {
  if (Array.isArray(types)) return types.some(type => isValidArg(argument)(type));
  if (isValidArg(argument)(types)) return true;
  return false
}