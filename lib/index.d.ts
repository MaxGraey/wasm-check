declare const _default: {
    /** Check support WebAssembly version */
    support(version?: number): boolean;
    /** Check support streaming compilation and instantiation */
    readonly supportStreaming: boolean;
    feature: {
        /** Check support JavaScript BigInt to WebAssembly i64 integration */
        readonly bigInt: boolean;
        /** Check support bulk memory operations (--experimental-wasm-bulk-memory) */
        readonly bulk: boolean;
        /** Check support exception handling (--experimental-wasm-eh) */
        readonly exceptions: boolean;
        /** Check support import & export of mutable globals (--experimental-wasm-mut-global) */
        readonly mutableGlobals: boolean;
        /** Check support multi values (--experimental-wasm-mv) */
        readonly multiValues: boolean;
        /** Check support non-trapping float-to-int conversions (--experimental-wasm-sat-f2i-conversions) */
        readonly saturateConversions: boolean;
        /** Check support zero and sign extensions (--experimental-wasm-se) */
        readonly signExtensions: boolean;
        /** Check support tail call optiminations (--experimental-wasm-return-call) */
        readonly tailCalls: boolean;
        /** Check support threads and atomics (--experimental-wasm-threads) */
        readonly threads: boolean;
        /** Check support SIMD (--experimental-wasm-simd) */
        readonly simd: boolean;
        /** Check support basic reference types "anyref" (--experimental-wasm-anyref) */
        readonly references: boolean;
        /** Check support typed function references and closures (pre-proposal) */
        readonly functionReferences: boolean;
    };
};
export default _default;
