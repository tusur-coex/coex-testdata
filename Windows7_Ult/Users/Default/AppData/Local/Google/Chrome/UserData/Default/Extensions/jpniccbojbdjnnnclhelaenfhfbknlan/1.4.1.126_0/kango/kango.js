(function () {
    kango.oop.mixin(kango, kango.EventTarget.prototype);
    kango.oop.mixin(kango, new kango.EventTarget);
    kango.oop.mixin(kango, {CONFIG_FILE_NAME: "extension_info.json", event: {READY: "Ready", ASYNC_MODULE_INITIALIZED: "AsyncModuleInitialized", MESSAGE: "message", UNINSTALL: "Uninstall"}, _extensionInfo: null, _eventState: 0, _modulesToInit: [], _modules: [], _asyncModules: [], _externalObjects: ["kango"], _initModules: function () {
        kango.array.forEach(this._modulesToInit, function (a) {
                a = new a(this);
                this._modules.push(a)
            },
            this);
        this._modulesToInit = []
    }, init: function (a) {
        this._extensionInfo = a;
        var e = !1;
        this.addEventListener(this.event.ASYNC_MODULE_INITIALIZED, kango.func.bind(function (a) {
            for (var b = 0; b < this._asyncModules.length; b++)if (a.data == this._asyncModules[b]) {
                this._asyncModules.splice(b, 1);
                break
            }
            e && 0 == this._asyncModules.length && this.fireEvent(this.event.READY)
        }, this));
        this._initModules();
        e = !0;
        0 == this._asyncModules.length && this.fireEvent(this.event.READY)
    }, dispose: function () {
        this.removeAllEventListeners();
        kango.array.forEach(this._modules.reverse(),
            function (a) {
                "undefined" != typeof a.dispose && a.dispose()
            }, this);
        this._modules = []
    }, registerModule: function (a) {
        this._modulesToInit.push(a)
    }, registerAsyncModuleInitializer: function (a) {
        this._asyncModules.push(a)
    }, getDefaultModuleRegistrar: function (a, e) {
        return function (c) {
            c = kango.object.resolveOrCreateName(c, a);
            var b = c.parent, d = c.terminalName;
            b[d] = new e;
            this.dispose = function () {
                "undefined" != typeof b[d].dispose && b[d].dispose();
                b[d] = null
            }
        }
    }, getAliasModuleRegistrar: function (a, e) {
        return function (c) {
            var b = kango.object.resolveOrCreateName(c,
                a), d = b.parent, f = b.terminalName;
            c = kango.object.resolveName(c, e);
            d[f] = c.parent[c.terminalName];
            this.dispose = function () {
                d[f] = null
            }
        }
    }, getExtensionInfo: function () {
        return kango.object.clone(this._extensionInfo)
    }, getContext: function () {
        return kango.lang.getGlobalContext()
    }, getBackgroundPage: function () {
        return kango.backgroundScript.getContext()
    }, isDebug: function () {
        var a = this.getExtensionInfo();
        return"undefined" != typeof a.debug && a.debug
    }})
})();