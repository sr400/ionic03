import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      var notificationOpenedCallback = function(jsonData) {
        //console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
        alert('notificationOpenedCallback: ' + JSON.stringify(jsonData));
      };
  
      window["plugins"].OneSignal
        //.startInit("YOUR_APPID", "YOUR_GOOGLE_PROJECT_NUMBER_IF_ANDROID")
        .startInit("148050e6-ec4f-4ce2-bc27-2c40fa3ca702", "979800731935")
        .handleNotificationOpened(notificationOpenedCallback)
        .endInit();      
    });
  }
}
