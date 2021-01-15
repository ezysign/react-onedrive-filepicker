"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var utils_1 = require("./utils");
var launchOneDrivePicker = function (oneDriveApplicationId, multiSelect, advancedOptions, action) {
    return new Promise(function (resolve, reject) {
        var odOptions = {
            clientId: oneDriveApplicationId,
            action: action || "download",
            multiSelect: multiSelect,
            openInNewWindow: true,
            advanced: advancedOptions || {},
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
    var clientID = _a.clientID, onSuccess = _a.onSuccess, onCancel = _a.onCancel, onError = _a.onError, action = _a.action, multiSelect = _a.multiSelect, children = _a.children;
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
    return (React.createElement("div", { onClick: function (e) {
            e.preventDefault();
            launchOneDrivePicker(clientID, multiSelect, action)
                .then(function (result) {
                if (result) {
                    onSuccess(result);
                }
                else {
                    onCancel && onCancel(null);
                }
            })
                .catch(function (reason) {
                onError && onError(reason);
            });
        } },
        children && children,
        !children && "Open With One Drive"));
};
exports.default = ReactOneDrive;
//# sourceMappingURL=index.js.map