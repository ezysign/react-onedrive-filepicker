"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var utils_1 = require("./utils");
var launchOneDrivePicker = function (oneDriveApplicationId) {
    return new Promise(function (resolve, reject) {
        var odOptions = {
            clientId: oneDriveApplicationId,
            action: "download",
            multiSelect: true,
            openInNewWindow: true,
            advanced: {
            //filter: "folder,.png" // Show only folders and png files
            //filter: "folder,photo" // Show only folders and photos
            },
            success: function (files) {
                resolve(files);
            },
            cancel: function () {
                resolve(null);
            },
            error: function (e) {
                reject(e);
            },
        };
        OneDrive.open(odOptions);
    });
};
var ReactOneDrive = function (_a) {
    var clientID = _a.clientID;
    React.useEffect(function () {
        var mounted = true;
        if (mounted) {
            utils_1.appendScript("https://js.live.net/v7.2/OneDrive.js");
        }
        return function () {
            mounted = false;
            utils_1.removeScript("https://js.live.net/v7.2/OneDrive.js");
        };
    }, [clientID]);
    return (React.createElement("button", { type: "button", onClick: function (e) {
            e.preventDefault();
            launchOneDrivePicker(clientID)
                .then(function (result) {
                if (result) {
                    for (var _i = 0, _a = result.value; _i < _a.length; _i++) {
                        var file = _a[_i];
                        var name_1 = file.name;
                        var url = file["@microsoft.graph.downloadUrl"];
                        console.log({ name: name_1, url: url });
                    }
                }
            })
                .catch(function (reason) {
                console.error(reason);
            });
        } }, "Open from OneDrive"));
};
exports.default = ReactOneDrive;
//# sourceMappingURL=index.js.map