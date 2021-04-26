import { run } from './run.js';

export default function(work, dependencies = {}) {
  const handler = {
    apply: function(target, thisArg, argumentsList) {
      return run(target, argumentsList, dependencies)
    }
  };

  return new Proxy(work, handler);
}