
  cordova.define('cordova/plugin_list', function(require, exports, module) {
    module.exports = [
      {
          "id": "cordova-plugin-camera.Camera",
          "file": "plugins/cordova-plugin-camera/www/CameraConstants.js",
          "pluginId": "cordova-plugin-camera",
        "clobbers": [
          "Camera"
        ]
        },
      {
          "id": "cordova-plugin-camera.CameraPopoverHandle",
          "file": "plugins/cordova-plugin-camera/www/ios/CameraPopoverHandle.js",
          "pluginId": "cordova-plugin-camera",
        "clobbers": [
          "CameraPopoverHandle"
        ]
        },
      {
          "id": "cordova-plugin-camera.CameraPopoverOptions",
          "file": "plugins/cordova-plugin-camera/www/CameraPopoverOptions.js",
          "pluginId": "cordova-plugin-camera",
        "clobbers": [
          "CameraPopoverOptions"
        ]
        },
      {
          "id": "cordova-plugin-network-information.Connection",
          "file": "plugins/cordova-plugin-network-information/www/Connection.js",
          "pluginId": "cordova-plugin-network-information",
        "clobbers": [
          "Connection"
        ]
        },
      {
          "id": "cordova-plugin-geolocation.Coordinates",
          "file": "plugins/cordova-plugin-geolocation/www/Coordinates.js",
          "pluginId": "cordova-plugin-geolocation",
        "clobbers": [
          "Coordinates"
        ]
        },
      {
          "id": "cordova-plugin-inappbrowser.inappbrowser",
          "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
          "pluginId": "cordova-plugin-inappbrowser",
        "clobbers": [
          "cordova.InAppBrowser.open"
        ]
        },
      {
          "id": "cordova-plugin-device.device",
          "file": "plugins/cordova-plugin-device/www/device.js",
          "pluginId": "cordova-plugin-device",
        "clobbers": [
          "device"
        ]
        },
      {
          "id": "cordova-plugin-camera.camera",
          "file": "plugins/cordova-plugin-camera/www/Camera.js",
          "pluginId": "cordova-plugin-camera",
        "clobbers": [
          "navigator.camera"
        ]
        },
      {
          "id": "cordova-plugin-network-information.network",
          "file": "plugins/cordova-plugin-network-information/www/network.js",
          "pluginId": "cordova-plugin-network-information",
        "clobbers": [
          "navigator.connection"
        ]
        },
      {
          "id": "cordova-plugin-geolocation.geolocation",
          "file": "plugins/cordova-plugin-geolocation/www/geolocation.js",
          "pluginId": "cordova-plugin-geolocation",
        "clobbers": [
          "navigator.geolocation"
        ]
        },
      {
          "id": "cordova-plugin-geolocation.Position",
          "file": "plugins/cordova-plugin-geolocation/www/Position.js",
          "pluginId": "cordova-plugin-geolocation",
        "clobbers": [
          "Position"
        ]
        },
      {
          "id": "cordova-plugin-geolocation.PositionError",
          "file": "plugins/cordova-plugin-geolocation/www/PositionError.js",
          "pluginId": "cordova-plugin-geolocation",
        "clobbers": [
          "PositionError"
        ]
        }
    ];
    module.exports.metadata =
    // TOP OF METADATA
    {
      "cordova-plugin-camera": "8.0.0",
      "cordova-plugin-device": "3.0.0",
      "cordova-plugin-geolocation": "5.0.0",
      "cordova-plugin-inappbrowser": "6.0.0",
      "cordova-plugin-network-information": "3.0.0"
    };
    // BOTTOM OF METADATA
    });
    