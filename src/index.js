import { run } from './run.js';

export default function(work) {
  const handler = {
    apply: function(target, thisArg, argumentsList) {
      return run(target, argumentsList)
    }
  };

  return new Proxy(work, handler);
}