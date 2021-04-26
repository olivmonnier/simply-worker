import { createWorker } from './createWorker.js';
import { makeResponse } from './makeResponse.js';
import { isValid } from './validation.js';
import { argumentError } from './utils.js';

export const run = (work = null, args) => {
  const validWork = isValid(work)('function')
  const validArgs = isValid(args)(['array', 'undefined'])
  if (validWork && validArgs) {
    const worker = createWorker(makeResponse(work))
    return worker.post({ args })
  }
  if (!validWork) console.error(argumentError({ expected: 'a function', received: work }))
  if (!validArgs) console.error(argumentError({ expected: 'an array', received: args }))
  return null
}