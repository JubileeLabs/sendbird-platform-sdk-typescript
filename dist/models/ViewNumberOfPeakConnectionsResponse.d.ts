import { ViewNumberOfPeakConnectionsResponsePeakConnectionsInner } from './ViewNumberOfPeakConnectionsResponsePeakConnectionsInner';
export declare class ViewNumberOfPeakConnectionsResponse {
    'peakConnections'?: Array<ViewNumberOfPeakConnectionsResponsePeakConnectionsInner>;
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
