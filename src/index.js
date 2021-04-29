import { run } from './run.js';

/**
 * 
 * @param {Function} work 
 * @param {Object} dependencies 
 * @returns Function
 */
export default function functionWorker(work, dependencies = {}) {
  const handler = {
    apply: function(target, thisArg, argumentsList) {
      return run(target, argumentsList, dependencies)
    }
  };

  return new Proxy(work, handler);
}