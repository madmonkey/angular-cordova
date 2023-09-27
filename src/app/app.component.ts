import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from 'ionic-appauth';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private auth: AuthService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(async () => {
      console.log('platform ready');
      this.auth.authConfig = {
        end_session_redirect_url: 'app-dci://10.0.2.2/end-session',
        redirect_url: 'app-dci://10.0.2.2/oidc-callback',
        scopes: 'openid profile email',
        server_host: 'http://10.0.2.2:44330',
        client_id: 'mobile_web',
        pkce: true
      };
      await this.auth.init();
      console.table(this.auth);
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
