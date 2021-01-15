import * as React from "react";

import { appendScript, removeScript } from "./utils";

export type ReactOneDriveProps = {
  clientID: string;
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
  };
  success(result: OneDriveResult): void;
  cancel(): void;
  error(e: any): void;
};

export interface OneDrivePicker {
  open(options: OneDriveOpenOptions): any;
}

declare var OneDrive: OneDrivePicker;

const launchOneDrivePicker = (oneDriveApplicationId: string) => {
  return new Promise<OneDriveResult | null>((resolve, reject) => {
    var odOptions: OneDriveOpenOptions = {
      clientId: oneDriveApplicationId,
      action: "download",
      multiSelect: true,
      openInNewWindow: true,
      advanced: {
        //filter: "folder,.png" // Show only folders and png files
        //filter: "folder,photo" // Show only folders and photos
      },
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

const ReactOneDrive: React.FC<ReactOneDriveProps> = ({ clientID }) => {
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
    <button
      type="button"
      onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        launchOneDrivePicker(clientID)
          .then((result: OneDriveResult | null) => {
            if (result) {
              for (const file of result.value) {
                const name = file.name;
                const url = file["@microsoft.graph.downloadUrl"];
                console.log({ name: name, url: url });
              }
            }
          })
          .catch((reason: any) => {
            console.error(reason);
          });
      }}
    >
      Open from OneDrive
    </button>
  );
};

export default ReactOneDrive;
