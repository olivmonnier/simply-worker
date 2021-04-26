export const makeResponse = (work, dependencies) => `
  ${declareDependencies(dependencies)}
  const isPromise = (promise) => !!promise && typeof promise.then === 'function'
  self.onmessage = event => {
    const args = event.data.message.args
    const result = args ? (${work}).apply(null, args) : (${work})()
    if (isPromise(result)) {
      result.then(res => {
        self.postMessage(res)
        return close()
      });
    } else {
      self.postMessage(result)
      return close()
    }
  }
`
function declareDependencies(dependencies) {
  return Object.keys(dependencies)
    .map(dep => `let ${dep} = ${typeof dependencies[dep] === 'string' ? '\'' + dependencies[dep] + '\'' : dependencies[dep] };`)
    .join('')
}