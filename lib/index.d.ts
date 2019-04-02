declare const _default: {
    /** Check support WebAssembly version */
    support(version?: number): boolean;
    /** Check support streaming compilation and instantiation */
    readonly supportStreaming: boolean;
    feature: {
        /** Check support JavaScript BigInt to WebAssembly i64 integration */
        readonly bigInt: boolean;
        /** Check support bulk memory operations */
        readonly bulk: boolean;
        /** Check support exception handling (--experimental-wasm-eh) */
        readonly exceptions: boolean;
        /** Check support mutable globals */
        readonly mutableGlobals: boolean;
        /** Check support multi values (--experimental-wasm-mv) */
        readonly multiValues: boolean;
        /** Check support non-trapping float-to-int conversions to WebAssembly (--experimental-wasm-sat-f2i-conversions) */
        readonly saturateConversions: boolean;
        /** Check support zero and sign extensions */
        readonly signExtensions: boolean;
        /** Check support tail call optiminations */
        readonly tailCalls: boolean;
        /** Threads (--experimental-wasm-threads) */
        readonly threads: boolean;
        /** Check support SIMD in WebAssembly (--experimental-wasm-simd) */
        readonly simd: boolean;
        /** Check support basic reference types "anyref" (--experimental-wasm-anyref) */
        readonly references: boolean;
    };
};
export default _default;
