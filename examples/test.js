const assert = require('assert');
const check  = require('../lib/index');

assert.strictEqual(check.support(), true);
assert.notStrictEqual(check.support(2), true);

console.log(check.feature.bulk);
console.log(check.feature.simd);
console.log(check.feature.mutableGlobal);
console.log(check.feature.multiValue);
