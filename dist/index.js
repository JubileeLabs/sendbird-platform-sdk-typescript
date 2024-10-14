"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebhookApi = exports.UserApi = exports.StatisticsApi = exports.ScheduledMessageApi = exports.ReportApi = exports.PushNotificationsApi = exports.PrivacyApi = exports.PollApi = exports.PinAMessageApi = exports.OpenChannelApi = exports.ModerationApi = exports.MetadataApi = exports.MessageApi = exports.GroupChannelApi = exports.DeleteAPinApi = exports.DataExportApi = exports.BotApi = exports.ApplicationApi = exports.AnnouncementApi = exports.RequiredError = exports.createConfiguration = void 0;
__exportStar(require("./http/http"), exports);
__exportStar(require("./auth/auth"), exports);
__exportStar(require("./models/all"), exports);
var configuration_1 = require("./configuration");
Object.defineProperty(exports, "createConfiguration", { enumerable: true, get: function () { return configuration_1.createConfiguration; } });
__exportStar(require("./apis/exception"), exports);
__exportStar(require("./servers"), exports);
var baseapi_1 = require("./apis/baseapi");
Object.defineProperty(exports, "RequiredError", { enumerable: true, get: function () { return baseapi_1.RequiredError; } });
var PromiseAPI_1 = require("./types/PromiseAPI");
Object.defineProperty(exports, "AnnouncementApi", { enumerable: true, get: function () { return PromiseAPI_1.PromiseAnnouncementApi; } });
Object.defineProperty(exports, "ApplicationApi", { enumerable: true, get: function () { return PromiseAPI_1.PromiseApplicationApi; } });
Object.defineProperty(exports, "BotApi", { enumerable: true, get: function () { return PromiseAPI_1.PromiseBotApi; } });
Object.defineProperty(exports, "DataExportApi", { enumerable: true, get: function () { return PromiseAPI_1.PromiseDataExportApi; } });
Object.defineProperty(exports, "DeleteAPinApi", { enumerable: true, get: function () { return PromiseAPI_1.PromiseDeleteAPinApi; } });
Object.defineProperty(exports, "GroupChannelApi", { enumerable: true, get: function () { return PromiseAPI_1.PromiseGroupChannelApi; } });
Object.defineProperty(exports, "MessageApi", { enumerable: true, get: function () { return PromiseAPI_1.PromiseMessageApi; } });
Object.defineProperty(exports, "MetadataApi", { enumerable: true, get: function () { return PromiseAPI_1.PromiseMetadataApi; } });
Object.defineProperty(exports, "ModerationApi", { enumerable: true, get: function () { return PromiseAPI_1.PromiseModerationApi; } });
Object.defineProperty(exports, "OpenChannelApi", { enumerable: true, get: function () { return PromiseAPI_1.PromiseOpenChannelApi; } });
Object.defineProperty(exports, "PinAMessageApi", { enumerable: true, get: function () { return PromiseAPI_1.PromisePinAMessageApi; } });
Object.defineProperty(exports, "PollApi", { enumerable: true, get: function () { return PromiseAPI_1.PromisePollApi; } });
Object.defineProperty(exports, "PrivacyApi", { enumerable: true, get: function () { return PromiseAPI_1.PromisePrivacyApi; } });
Object.defineProperty(exports, "PushNotificationsApi", { enumerable: true, get: function () { return PromiseAPI_1.PromisePushNotificationsApi; } });
Object.defineProperty(exports, "ReportApi", { enumerable: true, get: function () { return PromiseAPI_1.PromiseReportApi; } });
Object.defineProperty(exports, "ScheduledMessageApi", { enumerable: true, get: function () { return PromiseAPI_1.PromiseScheduledMessageApi; } });
Object.defineProperty(exports, "StatisticsApi", { enumerable: true, get: function () { return PromiseAPI_1.PromiseStatisticsApi; } });
Object.defineProperty(exports, "UserApi", { enumerable: true, get: function () { return PromiseAPI_1.PromiseUserApi; } });
Object.defineProperty(exports, "WebhookApi", { enumerable: true, get: function () { return PromiseAPI_1.PromiseWebhookApi; } });
//# sourceMappingURL=index.js.map