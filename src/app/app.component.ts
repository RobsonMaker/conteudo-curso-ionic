import { Component, RootRenderer } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ConfigService } from './providers/config/config.service';
import { Routes, Router } from '@angular/router';
import { IntroPage } from './intro/intro.page';
import { IntroPageModule } from './intro/intro.module';
import { IntroPageRoutingModule } from './intro/intro-routing.module';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  providers:[
    ConfigService
  ]
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    ConfigService: ConfigService,
    private router: Router
    
    
  ) {
    let config = ConfigService.getConfigDate()
    console.log(config)

    if(config == null){ 
      ConfigService.setCongigDate(false) 
      this.router.navigate(['/tabs/intro']);          
      
      
    }else{
      this.router.navigate(['/tabs']);     
      console.log("Já foi carregado a Intro")
    }
    this.initializeApp();
  }

  initializeApp() {
 
    this.platform.ready().then(() => {

      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
 