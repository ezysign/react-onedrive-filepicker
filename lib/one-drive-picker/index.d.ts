import * as React from "react";
export declare type ReactOneDriveProps = {
    clientID: string;
    children?: React.ReactNode;
    multiSelect: boolean;
    onSuccess: (result: OneDriveResult | null) => void;
    onCancel?: (result: OneDriveResult | null) => void;
    action?: "download" | "share" | "query";
    onError?: (reason: any) => void;
};
export declare type OneDriveResult = {
    value: OneDriveFile[];
    webUrl: string | null;
};
export declare type OneDriveFile = {
    "@microsoft.graph.downloadUrl": string;
    "thumbnails@odata.context": string;
    id: string;
    name: string;
    size: number;
    thumbnails: Thumbnails[];
    webUrl: string;
};
export declare type Thumbnails = {
    id: string;
    large: Thumbnail;
    medium: Thumbnail;
    small: Thumbnail;
};
export declare type Thumbnail = {
    height: number;
    width: number;
    url: string;
};
export declare type OneDriveOpenOptions = {
    clientId: string;
    action: "download" | "share" | "query";
    multiSelect: boolean;
    openInNewWindow: boolean;
    advanced: {
        filter?: string;
        queryParameters?: string;
        redirectUri?: string;
        endpointHint?: string;
        accessToken?: string;
        loginHint?: any;
        isConsumerAccount?: any;
        scopes?: any;
        navigation?: any;
        createLinkParameters?: {
            type: string;
            scope: string;
        };
    };
    success(result: OneDriveResult): void;
    cancel(): void;
    error(e: any): void;
};
export interface OneDrivePicker {
    open(options: OneDriveOpenOptions): any;
}
declare const ReactOneDrive: React.FC<ReactOneDriveProps>;
export default ReactOneDrive;
