# function-worker
Wrap your function simply in web worker. It use proxy to transform your function and avoid `postMessage` and `onmessage` methods.
- 867 bytes gzipped
- No dependencies
- No worker file to declare
- Works with promise function

## Installation
```
npm install function-worker
```

## Arguments
|Name|Type|Description|
|-|-|-|
|fn|Function|Function to encapsulate in web worker
|dependencies|Object|All functions/parameters could be used in your function

## Examples
```js
import functionWorker from 'function-worker';

// Example with basic function
const sum = (a, b) => a + b;
const sumWorker = functionWorker(sum);

sumWorker(1, 4).then(res => console.log(res));

// Example with async function
const asyncSum = (a, b) => {
  return new Promise((resolve, reject) => {
    return setTimeout(() => {
      resolve(a + b)
    }, 1000)
  });
}
const asyncSumWorker = functionWorker(asyncSum);

asyncSumWorker(3, 4).then(res => console.log(res))

// Example with dependencies
const log = (b) => console.log(foo, a, test(), b);
const logWorker = functionWorker(log, {
  foo: 'bar',
  a: true,
  test: () => 123
});
logWorker('Hello World')
```

## License

[MIT](LICENSE).