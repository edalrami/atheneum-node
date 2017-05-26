cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-inappbrowser.inappbrowser",
        "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
        "pluginId": "cordova-plugin-inappbrowser",
        "clobbers": [
            "cordova.InAppBrowser.open",
            "window.open"
        ]
    },
    {
        "id": "cordova-plugin-buildinfo.BuildInfo",
        "file": "plugins/cordova-plugin-buildinfo/www/buildinfo.js",
        "pluginId": "cordova-plugin-buildinfo",
        "clobbers": [
            "BuildInfo"
        ]
    },
    {
        "id": "cordova-universal-links-plugin.universalLinks",
        "file": "plugins/cordova-universal-links-plugin/www/universal_links.js",
        "pluginId": "cordova-universal-links-plugin",
        "clobbers": [
            "universalLinks"
        ]
    },
    {
        "id": "cordova-plugin-browsertab.BrowserTab",
        "file": "plugins/cordova-plugin-browsertab/www/browsertab.js",
        "pluginId": "cordova-plugin-browsertab",
        "clobbers": [
            "cordova.plugins.browsertab"
        ]
    },
    {
        "id": "cordova-plugin-firebase.FirebasePlugin",
        "file": "plugins/cordova-plugin-firebase/www/firebase.js",
        "pluginId": "cordova-plugin-firebase",
        "clobbers": [
            "FirebasePlugin"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.2",
    "cordova-plugin-inappbrowser": "1.7.1",
    "cordova-plugin-buildinfo": "1.1.0",
    "cordova-universal-links-plugin": "1.2.1",
    "cordova-plugin-compat": "1.0.0",
    "cordova-plugin-browsertab": "0.2.0",
    "cordova-plugin-firebase": "0.1.21"
};
// BOTTOM OF METADATA
});