kango.ui = {};
kango.ui.ButtonBase = function (a) {
    this._details = a;
    kango.oop.mixin(this, kango.EventTarget.prototype);
    kango.oop.mixin(this, new kango.EventTarget)
};
kango.ui.ButtonBase.prototype = {_details: null, event: {COMMAND: "command", POPUP_DOCUMENT_COMPLETE: "PopupDocumentComplete"}, setTooltipText: function (a) {
    throw new kango.NotImplementedException;
}, setCaption: function (a) {
    throw new kango.NotImplementedException;
}, setIcon: function (a) {
    throw new kango.NotImplementedException;
}, setBadgeValue: function (a) {
    throw new kango.NotImplementedException;
}, setBadgeBackgroundColor: function (a) {
    throw new kango.NotImplementedException;
}, setPopup: function (a) {
    throw new kango.NotImplementedException;
}, setContextMenu: function () {
    throw new kango.NotImplementedException;
}};
kango.ui.IOptionsPage = function () {
};
kango.ui.IOptionsPage.prototype = {open: function () {
    throw new kango.NotImplementedException;
}};
kango.ui.NotificationBase = function (a, b) {
    kango.oop.mixin(this, kango.EventTarget.prototype);
    kango.oop.mixin(this, new kango.EventTarget);
    this._id = a;
    b && (this._impl = b)
};
kango.ui.NotificationBase.prototype = {_impl: null, event: {CLICK: "Click", CLOSE: "Close", SHOW: "Show"}, id: "", getId: function () {
    return this._id
}, show: function () {
    throw new kango.NotImplementedException;
}, close: function () {
    throw new kango.NotImplementedException;
}};
kango.ui.NotificationsBase = function () {
};
kango.ui.NotificationsBase.prototype = {createNotification: function (a, b, c) {
    throw new kango.NotImplementedException;
}};
kango.ui.ContextMenuItemBase = function () {
    kango.oop.mixin(this, kango.EventTarget.prototype);
    kango.oop.mixin(this, new kango.EventTarget)
};
kango.ui.ContextMenuItemBase.prototype = {event: {CLICK: "click"}};