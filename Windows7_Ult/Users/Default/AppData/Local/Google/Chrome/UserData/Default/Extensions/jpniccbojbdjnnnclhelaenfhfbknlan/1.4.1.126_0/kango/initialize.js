window.addEventListener("load", function () {
    kango.init(function () {
        var a = new XMLHttpRequest;
        a.open("GET", chrome.extension.getURL(kango.CONFIG_FILE_NAME), !1);
        a.overrideMimeType("text/plain");
        a.send(null);
        return JSON.parse(a.responseText)
    }())
}, !1);
