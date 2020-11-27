// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// @ts-ignore
export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyCc-PPanRN2zAStBzz4FbRLTAP4vbcmxoE',
    authDomain: 'monetix-e776c.firebaseapp.com',
    databaseURL: 'https://monetix-e776c.firebaseio.com',
    projectId: 'monetix-e776c',
    storageBucket: 'monetix-e776c.appspot.com',
    messagingSenderId: '799326388483',
    appId: '1:799326388483:web:3e9d158b3bd6e2b064a936',
    measurementId: 'G-8ZZYKX3NEY'
  },
  // Initialize Firebase
  firebase.initializeApp(this.firebaseConfig),
  firebase.analytics(),
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
