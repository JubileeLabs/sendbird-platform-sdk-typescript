export declare class SendBirdRestrictionInfo {
    'description'?: string;
    'endAt'?: number;
    'restrictionType'?: SendBirdRestrictionInfoRestrictionTypeEnum;
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
export declare type SendBirdRestrictionInfoRestrictionTypeEnum = "banned" | "muted";
