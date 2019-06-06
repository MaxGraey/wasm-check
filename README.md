[![NPM registry](https://img.shields.io/npm/v/wasm-check.svg?style=for-the-badge)](https://www.npmjs.com/package/wasm-check)[![NPM license](https://img.shields.io/badge/license-mit-green.svg?style=for-the-badge)](LICENSE.md)

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
--experimental-wasm-anyref
--experimental-wasm-bigint
--experimental-wasm-bulk-memory
--experimental-wasm-eh
--experimental-wasm-mv
--experimental-wasm-return-call
--experimental-wasm-sat-f2i-conversions
--experimental-wasm-se
--experimental-wasm-simd
--experimental-wasm-threads
```


### Install

```
yarn add wasm-check
```
or
```
npm i wasm-check
```

### Usage

#### Check supported WebAssembly version

```ts
import check from 'wasm-check';
// or
// const check = require('wasm-check');

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
  references: false,
  functionReferences: false }
```

#### Or check concrete feature

```ts
import check from 'wasm-check';

console.log(check.feature.simd); // has SIMD support?
console.log(check.feature.tailCalls); // has tail call optimization support?
```

### TODO

- [ ] GC integration feature check
- [ ] Web IDL Bindings (host binding) feature check (?)
