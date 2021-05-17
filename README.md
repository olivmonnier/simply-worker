# simply-worker
Wrap your function simply in web worker. It use proxy to transform your function and avoid `postMessage` and `onmessage` methods.
- 867 bytes gzipped
- No dependencies
- No worker file to declare
- Works with promise function

## Installation
```
npm install simply-worker
```

## Arguments
|Name|Type|Description|
|-|-|-|
|fn|Function|Function to encapsulate in web worker
|dependencies|Object|All functions/parameters could be used in your function

## Examples
```js
import simplyWorker from 'simply-worker';

// Example with basic function
const sum = (a, b) => a + b;
const sumWorker = simplyWorker(sum);

sumWorker(1, 4).then(res => console.log(res));

// Example with async function
const asyncSum = (a, b) => {
  return new Promise((resolve, reject) => {
    return setTimeout(() => {
      resolve(a + b)
    }, 1000)
  });
}
const asyncSumWorker = simplyWorker(asyncSum);

asyncSumWorker(3, 4).then(res => console.log(res))

// Example with dependencies
const log = (b) => console.log(foo, a, test(), b);
const logWorker = simplyWorker(log, {
  foo: 'bar',
  a: true,
  test: () => 123
});
logWorker('Hello World')
```

## License

[MIT](LICENSE).