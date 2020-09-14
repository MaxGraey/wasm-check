[![NPM registry](https://img.shields.io/npm/v/wasm-check.svg?style=for-the-badge)](https://www.npmjs.com/package/wasm-check)[![NPM license](https://img.shields.io/badge/license-mit-green.svg?style=for-the-badge)](LICENSE.md)

Library for detect WebAssembly post-MVP features in NodeJS & Browser. Small and with zero dependencies.
---

## About post-MVP WebAssembly features

https://github.com/WebAssembly/design/blob/master/FutureFeatures.md#tracking-issues

_Tests on Canary with flags:_

Enable some experimental features for Chrome Canary (Mac):
```
/Applications/Google\ Chrome\ Canary.app/Contents/MacOS/Google\ Chrome\ Canary --js-flags="--experimental-wasm-eh"
```

## Support feature detections

- [x] [Reference types](https://github.com/WebAssembly/reference-types) _(--experimental-wasm-reftypes)_
- [x] [BigInt between js and wasm](https://github.com/WebAssembly/JS-BigInt-integration) _(--experimental-wasm-bigint)_
- [x] [Bulk memory operations](https://github.com/webassembly/bulk-memory-operations) _(--experimental-wasm-bulk-memory)_
- [x] [Exceptions](https://github.com/WebAssembly/exception-handling) _(--experimental-wasm-eh)_
- [x] [Multi values](https://github.com/WebAssembly/multi-value) _(--experimental-wasm-mv)_
- [x] [Tail recursion calls](https://github.com/webassembly/tail-call) _(--experimental-wasm-return-call)_
- [x] [Saturated (non-trapping) conversions from float to int](https://github.com/WebAssembly/nontrapping-float-to-int-conversions) _(--experimental-wasm-sat-f2i-conversions)_
- [x] [Sign/zero extensions](https://github.com/WebAssembly/sign-extension-ops) _(--experimental-wasm-se)_
- [x] [SIMD](https://github.com/webassembly/simd) _(--experimental-wasm-simd)_
- [x] [Threads](https://github.com/webassembly/threads) _(--experimental-wasm-threads)_
- [x] [Type reflection](https://github.com/WebAssembly/js-types) _(--experimental-wasm-type-reflection)_


## Install

```
yarn add wasm-check
```
or
```
npm i wasm-check
```

## Usage

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
  bulk: true,
  exceptions: false,
  mutableGlobal: true,
  multiValue: false,
  saturateConversions: true,
  signExtensions: true,
  tailCall: false,
  threads: false,
  simd: false,
  references: false,
  typeReflection: false,
  funcReferences: false }
```

#### Or check concrete feature

```ts
import * as check from 'wasm-check';

console.log(check.feature.simd); // has SIMD support?
console.log(check.feature.tailCalls); // has tail call optimization support?
```

#### TODO

- [ ] GC integration feature check
- [ ] Interface Types feature check
