import * as React from "react";

import { appendScript, removeScript } from "./utils";

export type ReactOneDriveProps = {
  clientID: string;
  children?: React.ReactNode;
  multiSelect: boolean;
  onSuccess: (result: OneDriveResult | null) => void;
  onCancel?: (result: OneDriveResult | null) => void;
  action?: "download" | "share" | "query";
  onError?: (reason: any) => void;
};

export type OneDriveResult = {
  value: OneDriveFile[];
  webUrl: string | null;
};

export type OneDriveFile = {
  "@microsoft.graph.downloadUrl": string;
  "thumbnails@odata.context": string;
  id: string;
  name: string;
  size: number;
  thumbnails: Thumbnails[];
  webUrl: string;
};

export type Thumbnails = {
  id: string;
  large: Thumbnail;
  medium: Thumbnail;
  small: Thumbnail;
};

export type Thumbnail = {
  height: number;
  width: number;
  url: string;
};

export type OneDriveOpenOptions = {
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
    createLinkParameters?: { type: string; scope: string };
  };
  success(result: OneDriveResult): void;
  cancel(): void;
  error(e: any): void;
};

export interface OneDrivePicker {
  open(options: OneDriveOpenOptions): any;
}

declare var OneDrive: OneDrivePicker;

const launchOneDrivePicker = (
  oneDriveApplicationId: string,
  multiSelect: boolean,
  advancedOptions?: any,
  action?: "download" | "share" | "query"
) => {
  return new Promise<OneDriveResult | null>((resolve, reject) => {
    var odOptions: OneDriveOpenOptions = {
      clientId: oneDriveApplicationId,
      action: action || "download",
      multiSelect: multiSelect,
      openInNewWindow: true,
      advanced: advancedOptions || {},
      success: (files: OneDriveResult): void => {
        resolve(files);
      },
      cancel: () => {
        resolve(null);
      },
      error: (e: any): void => {
        reject(e);
      },
    };

    OneDrive.open(odOptions);
  });
};

const ReactOneDrive: React.FC<ReactOneDriveProps> = ({
  clientID,
  onSuccess,
  onCancel,
  onError,
  action,
  multiSelect,
  children,
}) => {
  React.useEffect(() => {
    let mounted = true;
    if (mounted) {
      appendScript("https://js.live.net/v7.2/OneDrive.js");
    }
    return () => {
      mounted = false;
      removeScript("https://js.live.net/v7.2/OneDrive.js");
    };
  }, [clientID]);
  return (
    <div
      onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.preventDefault();
        launchOneDrivePicker(clientID, multiSelect, action)
          .then((result: OneDriveResult | null) => {
            if (result) {
              onSuccess(result);
            } else {
              onCancel && onCancel(null);
            }
          })
          .catch((reason: any) => {
            onError && onError(reason);
          });
      }}
    >
      {children && children}
      {!children && "Open With One Drive"}
    </div>
  );
};

export default ReactOneDrive;
