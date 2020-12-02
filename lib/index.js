"use strict";
function check(wasm, exec) {
    if (!exists)
        return false;
    const buffer = wasm.buffer;
    let ok = cache.get(buffer);
    if (ok == null) {
        if ((ok = WA.validate(buffer)) && exec) {
            try {
                new WA.Instance(new WA.Module(buffer)).exports['0']();
            }
            catch (_a) {
                ok = false;
            }
        }
        cache.set(buffer, ok);
    }
    return ok;
}
const WA = WebAssembly;
const u8 = (...bytes) => Uint8Array.of(0, 97, 115, 109, 1, 0, 0, 0, ...bytes);
// const u16  = (...bytes: number[]) => Uint16Array.of(24832, 28019, 1, 0, ...bytes)
const u32 = (...bytes) => Uint32Array.of(0x6D736100, 1, ...bytes);
const u8a = (...bytes) => u8(1, 4, 1, 96, 0, 0, 3, 2, 1, 0, ...bytes, 11, 0, 10, 4, 110, 97, 109, 101, 2, 3, 1, 0, 0);
const u16a = (...bytes) => Uint16Array.of(24832, 28019, 1, 0, 1025, 24577, 0, 515, 1, ...bytes);
const u32a = (...bytes) => u32(1610679297, 33751040, ...bytes, 40239360, 259);
const u16b = (...bytes) => u16a(...bytes, 2842, 4096, 28164, 28001, 357, 260, 256, 560, 259, 0);
const u16c = (...bytes) => u16a(...bytes, 2560, 28164, 28001, 613, 259, 0);
const exists = typeof WA === 'object';
const has = (entity) => exists && typeof entity === 'function';
const cache = new WeakMap();
const bigIntWasm = u32(1610679553, 58589440, 117440770, 805372165, 101318656, 1107297281, 268438272, 1835101700, 17039717, 36700416, 259);
const bulkWasm = u16c(773, 1, 2561, 269, 11, 65, 65, 65, 3068, 2816);
const exceptionsWasm = u16c(781, 1, 2560, 265, 7, 16390, 2311, 2827);
const mutableGlobalWasm = u8(2, 8, 1, 1, 97, 1, 98, 3, 127, 1, 6, 6, 1, 127, 1, 65, 0, 11, 7, 5, 1, 1, 97, 3, 1, 0, 8, 4, 110, 97, 109, 101, 2, 1, 0);
const multiValueWasm = Uint16Array.of(24832, 28019, 1, 0, 1537, 24577, 512, 32639, 515, 1, 2058, 1537, 16640, 16640, 2816, 2560, 28164, 28001, 613, 259, 0);
const saturateConversionsWasm = u16b(3082, 2561, 17152, 0, 0, 252);
const signExtensionsWasm = u16b(2058, 1537, 16640, 49152);
const tailCallWasm = u32a(101318657, 301990913, 268438272, 1835101700, 17039717);
const threadsWasm = u8a(5, 4, 1, 3, 1, 1, 10, 7, 1, 5, 0, 254, 3, 0);
const simdWasm = u32a(84344833, 6357249, 17369600, 4259847, 186257917, 1845758464);
const referencesWasm = u8a(10, 7, 1, 5, 0, 208, 112, 26);
module.exports = {
    /** Check support WebAssembly version */
    support(version = 1) {
        return check(Uint32Array.of(0x6D736100, version));
    },
    /** Check support streaming compilation and instantiation */
    get supportStreaming() { return has(WA.instantiateStreaming); },
    feature: {
        /** Check support JavaScript BigInt to WebAssembly i64 integration (--experimental-wasm-bigint) */
        get bigInt() { return check(bigIntWasm, true); },
        /** Check support bulk memory operations (--experimental-wasm-bulk-memory) */
        get bulk() { return check(bulkWasm); },
        /** Check support exception handling (--experimental-wasm-eh) */
        get exceptions() { return check(exceptionsWasm); },
        /** Check support import & export of mutable global (--experimental-wasm-mut-global) */
        get mutableGlobal() { return check(mutableGlobalWasm); },
        /** Check support multi values (--experimental-wasm-mv) */
        get multiValue() { return check(multiValueWasm); },
        /** Check support non-trapping float-to-int conversions (--experimental-wasm-sat-f2i-conversions) */
        get saturateConversions() { return check(saturateConversionsWasm); },
        /** Check support zero and sign extensions (--experimental-wasm-se) */
        get signExtensions() { return check(signExtensionsWasm); },
        /** Check support tail call optiminations (--experimental-wasm-return-call) */
        get tailCall() { return check(tailCallWasm); },
        /** Check support threads and atomics (--experimental-wasm-threads) */
        get threads() { return check(threadsWasm); },
        /** Check support SIMD (--experimental-wasm-simd) */
        get simd() { return check(simdWasm); },
        /** Check support basic reference types "externref" (--experimental-wasm-reftypes) */
        get references() { return check(referencesWasm); },
        /** Check support Type Reflection (--experimental-wasm-type-reflection) */
        get typeReflection() { return has(WA.Memory.type); },
        /** Check support typed function references and closures (pre-proposal) */
        get funcReferences() { return has(WA.Function); },
    }
};
//# sourceMappingURL=index.js.map