import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import * as firebase from 'firebase';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    console.log("firebase initializing");
    firebase.initializeApp({
      apiKey: "AIzaSyCxa2jX2gvLcZQjdccmeSWqbUd0QdVdP-w",
      authDomain: "mobiletest-f3e59.firebaseapp.com",
      databaseURL: "https://mobiletest-f3e59.firebaseio.com",
      projectId: "mobiletest-f3e59",
      storageBucket: "mobiletest-f3e59.appspot.com",
      messagingSenderId: "354485140364",
      appId: "1:354485140364:web:66cdd8487a7868727d34a9",
      measurementId: "G-B8E0V370C1"
    })
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
