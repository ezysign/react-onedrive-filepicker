import * as React from "react";
export declare type ReactOneDriveProps = {
    clientID: string;
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
