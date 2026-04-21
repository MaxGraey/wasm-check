export = {
  /** Check support WebAssembly version */
  support(version = 1) {
    return exists && check(Uint32Array.of(0x6D736100, version))
  },

  /** Check support streaming compilation and instantiation */
  get supportStreaming() { return exists && has(WA.instantiateStreaming) },

  feature: {
    /** Check support JavaScript BigInt to WebAssembly i64 integration */
    get bigInt() { return check(bigIntWasm, true) },
    /** Check support bulk memory operations */
    get bulk() { return check(bulkWasm) },
    /** Check support exception handling */
    get exceptions() { return check(exceptionsWasm) },
    /** Check support 64-bit memory */
    get memory64() { return check(memory64Wasm) },
    /** Check support custom page sizes */
    get customPageSizes() { return check(customPageSizesWasm) },
    /** Check support import & export of mutable global */
    get mutableGlobal() { return check(mutableGlobalWasm) },
    /** Check support multi values */
    get multiValue() { return check(multiValueWasm) },
    /** Check support non-trapping float-to-int conversions */
    get saturateConversions() { return check(saturateConversionsWasm) },
    /** Check support zero and sign extensions */
    get signExtensions() { return check(signExtensionsWasm) },
    /** Check support tail call optiminations */
    get tailCall() { return check(tailCallWasm) },
    /** Check support threads and atomics */
    get threads() { return check(threadsWasm) },
    /** Check support SIMD */
    get simd() { return check(simdWasm) },
    /** Check support Relaxed SIMD */
    get relaxedSimd() { return check(relaxedSimdWasm) },
    /** Check support Wasm GC */
    get gc() { return check(gcWasm) },
    /** Check support basic reference types "externref" */
    get references() { return check(referencesWasm) },
    /** Check support Type Reflection */
    get typeReflection() { return exists && has((<any>WA.Memory).type) },
    /** Check support typed function references */
    get funcReferences() { return check(funcReferencesWasm) },
    /** Check support JS String builtins */
    get jsStringBuiltins() {
      if (!exists) return false
      try {
        return WA.Module.imports(new WA.Module(jsStringBuiltinsWasm.buffer, {
          builtins: ['js-string']
        })).length === 0
      } catch { return false }
    },
  }
}

function check({ buffer }: ArrayBufferView, exec = false) {
  if (!exists) return false
  const cached = cache.get(buffer)
  if (cached != null) return cached
  let ok = WA.validate(buffer as BufferSource)
  if (ok && exec) {
    try {
      (new WA.Instance(
        new WA.Module(buffer as BufferSource)
      ).exports['0'] as Function)()
    } catch { ok = false }
  }
  cache.set(buffer, ok)
  return ok
}

const WA = globalThis.WebAssembly
const exists = typeof WA === 'object'
const has = (entity: unknown) => typeof entity !== 'undefined'

const u8   = (...bytes: number[]) => Uint8Array.of(0, 97, 115, 109, 1, 0, 0, 0, ...bytes)
// const u16  = (...bytes: number[]) => Uint16Array.of(24832, 28019, 1, 0, ...bytes)
const u32  = (...bytes: number[]) => Uint32Array.of(0x6D736100, 1, ...bytes)
const u32a = (...bytes: number[]) => u32(1610679297, 33751040, ...bytes, 40239360, 259)

const u8a  = (...bytes: number[]) => u8(1, 4, 1, 96, 0, 0, 3, 2, 1, 0, ...bytes, 11, 0, 10, 4, 110, 97, 109, 101, 2, 3, 1, 0, 0)
const u16a = (...bytes: number[]) => Uint16Array.of(24832, 28019, 1, 0, 1025, 24577, 0, 515, 1, ...bytes)
const u16b = (...bytes: number[]) => u16a(...bytes, 2842, 4096, 28164, 28001, 357, 260, 256, 560, 259, 0)

const cache = new WeakMap<ArrayBufferLike, boolean>()

const bigIntWasm = u32(
  1610679553, 58589440, 117440770, 805372165, 101318656, 1107297281, 268438272,
  1835101700, 17039717, 36700416,  259
)

const memory64Wasm = u8(
  5, 3, 1, 4, 1, 0, 8, 4, 110, 97, 109, 101, 2, 1, 0
)

const customPageSizesWasm = u8(
  5, 4, 1, 8, 0, 0
)

const bulkWasm = u16a(
  773, 1, 2561, 269, 11, 65, 65, 65, 3068, 2816, 2560, 28164, 28001, 613, 259, 0
)

const exceptionsWasm = u32(
  1610679297, 33751040, 134873089, 100664833, 185276736
)

const mutableGlobalWasm = u8(
  2, 8, 1, 1, 97, 1, 98, 3, 127, 1, 6, 6, 1, 127, 1, 65, 0,
  11, 7, 5, 1, 1, 97, 3, 1, 0, 8, 4, 110, 97, 109, 101, 2, 1, 0
)

const multiValueWasm = Uint16Array.of(
  24832, 28019, 1, 0, 1537, 24577, 512, 32639, 515, 1, 2058,
  1537, 16640, 16640, 2816, 2560, 28164, 28001, 613, 259, 0
)

const saturateConversionsWasm = u16b(
  3082, 2561, 17152, 0, 0, 252
)

const signExtensionsWasm = u16b(
  2058, 1537, 16640, 49152
)

const tailCallWasm = u32a(
  101318657, 301990913, 268438272, 1835101700, 17039717
)

const threadsWasm = u8a(
  5, 4, 1, 3, 1, 1, 10, 7, 1, 5, 0, 254, 3, 0
)

const simdWasm = u32a(
  84344833, 6357249, 17369600, 4259847, 186257917, 1845758464
)

const relaxedSimdWasm = u8(
  1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 7, 5, 1, 1, 48, 0, 0,
  10, 12, 1, 10, 1, 1, 123, 32, 0, 253, 129, 2, 26, 11
)

const gcWasm = u8(
  1, 3, 1, 95, 0, 6, 7, 1, 99, 0, 0, 208, 113, 11
)

const referencesWasm = u8a(
  10, 7, 1, 5, 0, 208, 112, 26
)

const funcReferencesWasm = u8(
  1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 9, 5, 1, 3, 0, 1, 0,
  10, 8, 1, 6, 0, 210, 0, 20, 0, 11
)

const jsStringBuiltinsWasm = u8(
  1, 6, 1, 96, 1, 111, 1, 127, 2, 23, 1, 14, 119, 97, 115, 109,
  58, 106, 115, 45, 115, 116, 114, 105, 110, 103, 4, 116, 101, 115,
  116, 0, 0
)
