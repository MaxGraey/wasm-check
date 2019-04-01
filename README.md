### WIP

_Tests on Canary with flags:_

Enable some experimental features for Chrome Canary (Mac):
```
/Applications/Google\ Chrome\ Canary.app/Contents/MacOS/Google\ Chrome\ Canary --js-flags="--experimental-wasm-eh"
```

### Install

```
yarn add github:MaxGraey/wasm-check
```

### Usage

#### Check supported WebAssembly version

```ts
import check from 'wasm-check';
console.log(check.support(1)); // default MVP
```

#### Check supporting streaming compilation

```ts
import check from 'wasm-check';
console.log(check.supportStreaming);
```

#### Get all features

```ts
import check from 'wasm-check';

const features = { ...check.feature };
console.log(features);
```

Output:
```js
{ bulk: false,
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
