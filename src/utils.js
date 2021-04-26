export const argumentError = ({ expected = '', received, extraInfo = '' }) => {
  try {
    return new TypeError(`${'You should provide ' + expected}${'\n' + extraInfo}${'\nReceived: ' + JSON.stringify(received)}`)
  } catch (err) {
    if (err.message === 'Converting circular structure to JSON') {
      return new TypeError(`${'You should provide ' + expected}${'\n' + extraInfo}${'\nReceived a circular structure: ' + received}`)
    }
    throw err
  }
}