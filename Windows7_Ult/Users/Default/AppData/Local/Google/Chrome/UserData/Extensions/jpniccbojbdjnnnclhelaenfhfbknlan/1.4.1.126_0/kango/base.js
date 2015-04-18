var kango = {ExtensionInfo: function () {
    this.homepage_url = this.creator = this.description = this.version = this.name = "";
    this.background_scripts = [];
    this.content_scripts = [];
    this.browser_button = {};
    this.options_page = this.update_path_url = "";
    this.context_menu_item = {}
}, NotImplementedException: function (b) {
    this.prototype = Error.prototype;
    this.name = "KangoNotImplementedException";
    this.message = "Method " + (b ? b + " " : "") + "is not implemented";
    this.toString = function () {
        return this.name + ": " + this.message
    }
}, Event: function (b, c, a) {
    this.type =
        b;
    this.target = a || null;
    this.result = null;
    "object" == typeof c && kango.oop.mixin(this, c)
}, EventTarget: function () {
    this._eventListeners = {}
}};
kango.EventTarget.prototype = {_eventListeners: null, dispatchEvent: function (b, c) {
    var a = b.type.toLowerCase();
    if ("undefined" != typeof this._eventListeners[a]) {
        for (var a = this._eventListeners[a], d = 0; d < a.length; d++) {
            var e = !1;
            if ("unknown" == typeof a[d].call)e = !0; else {
                try {
                    var f = a[d](b)
                } catch (g) {
                    if (g.stack) {
                        kango.console.log(g.stack);
                    }
                    if (-2146828218 == g.number || -2146823277 == g.number)e = !0; else throw g;
                }
                "undefined" != typeof f && "undefined" != typeof c && (c.value = f)
            }
            e && (a.splice(d, 1), d--)
        }
        return!0
    }
    return!1
}, fireEvent: function (b, c) {
    var a = {value: null}, d = this.dispatchEvent(new kango.Event(b,
        c), a);
    d && null != a.value && (c.result = a.value);
    return d
}, addEventListener: function (b, c) {
    if ("undefined" != typeof c.call && "undefined" != typeof c.apply) {
        for (var a = b.toLowerCase(), a = this._eventListeners[a] = this._eventListeners[a] || [], d = 0; d < a.length; d++)if (a[d] == c)return!1;
        a.push(c);
        return!0
    }
    return!1
}, removeEventListener: function (b, c) {
    var a = b.toLowerCase();
    if ("undefined" != typeof this._eventListeners[a])for (var a = this._eventListeners[a], d = 0; d < a.length; d++)if (a[d] == c)return a.splice(d, 1), !0;
    return!1
}, removeAllEventListeners: function () {
    this._eventListeners =
    {}
}};
kango.IConsole = function () {
};
kango.IConsole.prototype = {log: function (b) {
    throw new kango.NotImplementedException;
}};
kango.IOBase = function () {
};
kango.IOBase.prototype = {getExtensionFileUrl: function (b) {
    throw new kango.NotImplementedException;
}, isLocalUrl: function (b) {
    return-1 == b.indexOf("http://") && -1 == b.indexOf("https://") && -1 == b.indexOf("ftp://")
}, getFileUrl: function (b) {
    this.isLocalUrl(b) && (b = this.getExtensionFileUrl(b));
    return b
}, getExtensionFileContents: function (b) {
    var c = new XMLHttpRequest;
    c.open("GET", this.getExtensionFileUrl(b), !1);
    "undefined" != typeof c.overrideMimeType && c.overrideMimeType("text/plain");
    try {
        return c.send(null), c.responseText
    } catch (a) {
        return null
    }
},
    getResourceUrl: function (b) {
        throw new kango.NotImplementedException;
    }};
kango.LangBase = function () {
};
kango.LangBase.prototype = {getGlobalContext: function () {
    return function () {
        return this
    }.call(null)
}, evalInSandbox: function (b, c, a) {
    throw new kango.NotImplementedException;
}, evalScriptsInSandbox: function (b, c, a) {
    for (var d = "", e = 0; e < a.length; e++) {
        for (var f = 0; f < a[e].requires.length; f++)d += a[e].requires[f].text + "\n\n";
        d += a[e].text + "\n\n"
    }
    return this.evalInSandbox(b, c, d)
}};