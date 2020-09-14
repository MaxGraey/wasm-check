declare const _default: {
    /** Check support WebAssembly version */
    support(version?: number): boolean;
    /** Check support streaming compilation and instantiation */
    readonly supportStreaming: boolean;
    feature: {
        /** Check support JavaScript BigInt to WebAssembly i64 integration (--experimental-wasm-bigint) */
        readonly bigInt: boolean;
        /** Check support bulk memory operations (--experimental-wasm-bulk-memory) */
        readonly bulk: boolean;
        /** Check support exception handling (--experimental-wasm-eh) */
        readonly exceptions: boolean;
        /** Check support import & export of mutable global (--experimental-wasm-mut-global) */
        readonly mutableGlobal: boolean;
        /** Check support multi values (--experimental-wasm-mv) */
        readonly multiValue: boolean;
        /** Check support non-trapping float-to-int conversions (--experimental-wasm-sat-f2i-conversions) */
        readonly saturateConversions: boolean;
        /** Check support zero and sign extensions (--experimental-wasm-se) */
        readonly signExtensions: boolean;
        /** Check support tail call optiminations (--experimental-wasm-return-call) */
        readonly tailCall: boolean;
        /** Check support threads and atomics (--experimental-wasm-threads) */
        readonly threads: boolean;
        /** Check support SIMD (--experimental-wasm-simd) */
        readonly simd: boolean;
        /** Check support basic reference types "externref" (--experimental-wasm-reftypes) */
        readonly references: boolean;
        /** Check support Type Reflection (--experimental-wasm-type-reflection) */
        readonly typeReflection: boolean;
        /** Check support typed function references and closures (pre-proposal) */
        readonly funcReferences: boolean;
    };
};
export = _default;
