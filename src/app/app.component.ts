import { Component, RootRenderer } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ConfigService } from './providers/config/config.service';
import { Router } from '@angular/router';

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
     
      this.router.navigate(['/intro']);  
      ConfigService.setCongigDate(false)         
      
      
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
 