"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeScript = exports.appendScript = void 0;
var appendScript = function (scriptToAppend) {
    var script = document.createElement("script");
    script.src = scriptToAppend;
    script.async = true;
    document.body.appendChild(script);
};
exports.appendScript = appendScript;
var removeScript = function (scriptToremove) {
    var _a, _b;
    var allsuspects = document.getElementsByTagName("script");
    for (var i = allsuspects.length; i >= 0; i--) {
        if (allsuspects[i] &&
            allsuspects[i].getAttribute("src") !== null &&
            ((_a = allsuspects[i].getAttribute("src")) === null || _a === void 0 ? void 0 : _a.indexOf("" + scriptToremove)) !== -1) {
            (_b = allsuspects[i].parentNode) === null || _b === void 0 ? void 0 : _b.removeChild(allsuspects[i]);
        }
    }
};
exports.removeScript = removeScript;
//# sourceMappingURL=utils.js.map