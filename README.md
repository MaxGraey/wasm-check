TypeScript / JavaScript library for detect WebAssembly post-MVP features in node.js & browser
---

### About post-MVP WebAssembly features

https://github.com/WebAssembly/design/blob/master/FutureFeatures.md#tracking-issues

_Tests on Canary with flags:_

Enable some experimental features for Chrome Canary (Mac):
```
/Applications/Google\ Chrome\ Canary.app/Contents/MacOS/Google\ Chrome\ Canary --js-flags="--experimental-wasm-eh"
```

_More experimental js-flags for v8:_

```
--experimental-wasm-eh
--experimental-wasm-mv
--experimental-wasm-sat-f2i-conversions
--experimental-wasm-se
--experimental-wasm-threads
--experimental-wasm-simd
--experimental-wasm-anyref
--experimental-wasm-bulk-memory
--experimental-wasm-return-call
```


### Install

```
yarn add wasm-check
```
or
```
npm install wasm-check
```

### Usage

#### Check supported WebAssembly version

```ts
import check from 'wasm-check';
// for node.js:
// const check = require('wasm-check').default;

console.log(check.support()); // default MVP
console.log(check.support(1)); // same
console.log(check.support(2)); // version 2 (for future)
```

#### Check supporting streaming compilation

```ts
import check from 'wasm-check';

console.log(check.supportStreaming);
```

#### Get all post-MVP WebAssembly features

```ts
import check from 'wasm-check';

const features = { ...check.feature };
console.log(features);
```

Output:
```js
{ bigInt: false,
  bulk: false,
  exceptions: false,
  mutableGlobals: true,
  multiValues: false,
  saturateConversions: false,
  signExtensions: true,
  tailCalls: false,
  threads: false,
  simd: false,
  references: false }
```

#### Or check concrete feature

```ts
import check from 'wasm-check';

console.log(check.feature.simd); // has SIMD support?
console.log(check.feature.tailCalls); // has tail call optimization support?
```

### TODO

- [ ] GC integration feature check
- [ ] funcref/closure feature check
- [ ] host binding feature check (?)
