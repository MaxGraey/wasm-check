declare const _default: {
    support(version?: number): boolean;
    readonly supportStreaming: boolean;
    feature: {
        readonly bigInt: boolean;
        readonly bulk: boolean;
        readonly exceptions: boolean;
        readonly mutableGlobals: boolean;
        readonly multiValues: boolean;
        readonly saturateConversions: boolean;
        readonly signExtensions: boolean;
        readonly tailCalls: boolean;
        readonly threads: boolean;
        readonly simd: boolean;
        readonly references: boolean;
    };
};
export default _default;
