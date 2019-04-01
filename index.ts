export default {
  support(version = 1) {
    return check(Uint32Array.of(0x6D736100, version))
  },

  get supportStreaming() {
    return hasStreaming;
  },

  feature: {
    get bigInt() { return checkAndRun(bigIntWasm) },
    // Bulk memory operations
    get bulk() { return check(bulkWasm) },
    // Exception handling (--experimental-wasm-eh)
    get exceptions() { return check(exceptionsWasm) },
    // Mutable globals
    get mutableGlobals() { return check(mutableGlobalsWasm) },
    // Multi values (--experimental-wasm-mv)
    get multiValues() { return check(multiValuesWasm) },
    // Non-trapping conversions (--experimental-wasm-sat-f2i-conversions)
    get saturateConversions() { return check(saturateConversionsWasm) },
    // Sign extensions
    get signExtensions() { return check(signExtensionsWasm) },
    // Tail calls
    get tailCalls() { return check(tailCallsWasm) },
    // Threads (--experimental-wasm-threads)
    get threads() { return check(threadsWasm) },
    // SIMD (--experimental-wasm-simd)
    get simd() { return check(simdWasm) },
    // Reference types (--experimental-wasm-anyref)
    get references() { return check(referencesWasm) },

    // TODO
    // GC
    // Function Refs
  }
}

function check(wasm: ArrayBufferView) {
  return exists && WebAssembly.validate(wasm);
}

function checkAndRun(wasm: ArrayBufferView, name: string = '0') {
  if (check(wasm)) {
    try {
      new WebAssembly.Instance(wasm, {}).exports[name]()
      return true;
    } catch {}
  }
  return false;
}

const exists =
  typeof WebAssembly === 'object' &&
  typeof WebAssembly.validate === 'function'

const hasStreaming =
  typeof WebAssembly.instantiateStreaming === 'function' &&
  typeof WebAssembly.compileStreaming === 'function'

const bigIntWasm = Uint32Array.of(
  0x6D736100, 1, 1610679553, 58589440, 117440770, 805372165, 101318656,
  1107297281, 268438272, 1835101700, 17039717, 36700416, 259
)

const bulkWasm = Uint32Array.of(
  0x6D736100, 1, 1610679297, 33751040, 50659329, 167837697, 983313, 4259905,
  150732865, 167510016, 67832576, 1627455745, 1845758464, 40201569, 259
)

const exceptionsWasm = Uint16Array.of(
  24832, 28019, 1, 0, 1025, 24577, 0, 515, 1, 781, 1, 2560, 265, 7,
  16390, 2311, 2827, 2560, 28164, 28001, 613, 259, 0
)

const mutableGlobalsWasm = Uint32Array.of(
  0x6D736100, 1, 2130773510, 184566017, 16844039, 865, 1634599944, 16934253, 0
)

const multiValuesWasm = Uint16Array.of(
  24832, 28019, 1, 0, 1537, 24577, 512, 32639, 515, 1, 2058, 1537,
  16640, 16640, 2816, 2560, 28164, 28001, 613, 259, 0
)

const saturateConversionsWasm = Uint16Array.of(
  24832, 28019, 1, 0, 1025, 24577, 0, 515, 1, 3082, 2561, 17152,
  0, 0, 252, 2842, 4096, 28164, 28001, 357, 260, 256, 627, 259, 0
)

const signExtensionsWasm = Uint16Array.of(
  24832, 28019, 1, 0, 1025, 24577, 0, 515, 1, 2058, 1537, 16640,
  49152, 2842, 4096, 28164, 28001, 357, 260, 256, 560, 259, 0
)

const tailCallsWasm = Uint32Array.of(
  0x6D736100, 1, 1610679297, 33751040, 101318657, 301990913, 268438272,
  1835101700, 17039717, 40239360, 259
)

const threadsWasm = Uint32Array.of(
  0x6D736100, 1, 50398213, 134217985, 1835101700, 66149
)

const simdWasm = Uint8Array.of(
  0, 97, 115, 109, 1, 0, 0, 0, 1, 6, 1, 96, 1, 123, 1, 123,
  3, 2, 1, 0, 10, 10, 1, 8, 0, 32, 0, 32, 0, 253, 44, 11, 0,
  13, 4, 110, 97, 109, 101, 2, 6, 1, 0, 1, 0, 1, 48
)

const referencesWasm = Uint8Array.of(
  0, 97, 115, 109, 1, 0, 0, 0, 1, 5, 1, 96, 1, 111, 0, 3, 2, 1,
  0, 4, 4, 1, 111, 0, 1, 10, 10, 1, 8, 0, 65, 0, 32, 0, 38, 0,
  11, 0, 12, 4, 110, 97, 109, 101, 2, 5, 1, 0, 1, 0, 0
)
