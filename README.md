[![NPM registry](https://img.shields.io/npm/v/wasm-check.svg?style=for-the-badge)](https://www.npmjs.com/package/wasm-check)[![NPM license](https://img.shields.io/badge/license-mit-green.svg?style=for-the-badge)](LICENSE.md)

TypeScript / JavaScript library for detect WebAssembly post-MVP features in node.js & browser. Small and with zero dependencies.
---

### About post-MVP WebAssembly features

https://github.com/WebAssembly/design/blob/master/FutureFeatures.md#tracking-issues

_Tests on Canary with flags:_

Enable some experimental features for Chrome Canary (Mac):
```
/Applications/Google\ Chrome\ Canary.app/Contents/MacOS/Google\ Chrome\ Canary --js-flags="--experimental-wasm-eh"
```

### Support detections

- [x] Reference types _(--experimental-wasm-anyref)_
- [x] BigInt between js and wasm _(--experimental-wasm-bigint)_
- [x] Bulk memory operations _(--experimental-wasm-bulk-memory)_
- [x] Exceptions _(--experimental-wasm-eh)_
- [x] Multi values _(--experimental-wasm-mv)_
- [x] Recursive calls _(--experimental-wasm-return-call)_
- [x] Saturated conversions between float and integers _(--experimental-wasm-sat-f2i-conversions)_
- [x] Sign/zero extensions _(--experimental-wasm-se)_
- [x] SIMD _(--experimental-wasm-simd)_
- [x] Threads _(--experimental-wasm-threads)_
- [x] Type reflection _(--experimental-wasm-type-reflection)_


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
import * as check from 'wasm-check';
// or
// const check = require('wasm-check');

console.log(check.support()); // default MVP
console.log(check.support(1)); // same
console.log(check.support(2)); // version 2 (for future)
```

#### Check supporting streaming compilation

```ts
import * as check from 'wasm-check';

console.log(check.supportStreaming);
```

#### Get all post-MVP WebAssembly features

```ts
import * as check from 'wasm-check';

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
  typeReflection: false,
  functionReferences: false }
```

#### Or check concrete feature

```ts
import * as check from 'wasm-check';

console.log(check.feature.simd); // has SIMD support?
console.log(check.feature.tailCalls); // has tail call optimization support?
```

### TODO

- [ ] GC integration feature check
- [ ] Web IDL Bindings (host binding) feature check (?)
