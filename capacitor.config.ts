import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'ionic-capacitor',
  webDir: 'www',
  bundledWebRuntime: false,
  "plugins": {
    "SplashScreen": {
      "launchShowDuration": 3000,
      "launchAutoHide": true,
      "backgroundColor": "#ffffffff",
      "androidSplashResourceName": "splash",
      "androidScaleType": "CENTER_CROP",
      "showSpinner": true,
      "androidSpinnerStyle": "large",
      "iosSpinnerStyle": "small",
      "spinnerColor": "#999999",
      "splashFullScreen": true,
      "splashImmersive": true,
      "layoutName": "launch_screen",
      "useDialog": true
    },
    "GoogleAuth": {
      "scopes": ["profile","email"],
      "serverClientId": "756253807597-l87go2i1cdh03fgspa86brfove8sttnn.apps.googleusercontent.com"
    },
    // "PushNotifications": {
    //   presentationOptions: [‘badge’, ‘sound’, ‘alert’]
    // }
  }
};

export default config;
