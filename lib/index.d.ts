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
        /** Check support exception handling */
        readonly exceptions: boolean;
        /** Check support 64-bit memory */
        readonly memory64: boolean;
        /** Check support custom page sizes */
        readonly customPageSizes: boolean;
        /** Check support import & export of mutable global */
        readonly mutableGlobal: boolean;
        /** Check support multi values */
        readonly multiValue: boolean;
        /** Check support non-trapping float-to-int conversions */
        readonly saturateConversions: boolean;
        /** Check support zero and sign extensions */
        readonly signExtensions: boolean;
        /** Check support tail call optiminations */
        readonly tailCall: boolean;
        /** Check support threads and atomics */
        readonly threads: boolean;
        /** Check support SIMD */
        readonly simd: boolean;
        /** Check support Relaxed SIMD */
        readonly relaxedSimd: boolean;
        /** Check support Wasm GC */
        readonly gc: boolean;
        /** Check support basic reference types "externref" */
        readonly references: boolean;
        /** Check support Type Reflection */
        readonly typeReflection: boolean;
        /** Check support typed function references */
        readonly funcReferences: boolean;
        /** Check support JS String builtins */
        readonly jsStringBuiltins: boolean;
    };
};
export = _default;
