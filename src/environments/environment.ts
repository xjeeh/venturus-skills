// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// npm i firebase, angularfire2
// npm install -g firebase-tools

// firebase login
// firebase init
// firebase deploy

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyANB0yyZxbPjQ_HPrP8ZyjZnLVFH7kOSrk',
    authDomain: 'venturus-skills.firebaseapp.com',
    databaseURL: 'https://venturus-skills.firebaseio.com',
    projectId: 'venturus-skills',
    storageBucket: 'venturus-skills.appspot.com',
    messagingSenderId: '650836830945'
  }
};


/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
