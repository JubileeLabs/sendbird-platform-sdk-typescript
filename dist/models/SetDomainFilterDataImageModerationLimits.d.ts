export declare class SetDomainFilterDataImageModerationLimits {
    'adult'?: number;
    'spoof'?: number;
    'medical'?: number;
    'violence'?: number;
    'racy'?: number;
    static readonly discriminator: string | undefined;
    static readonly attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
        format: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
        format: string;
    }[];
    constructor();
}
