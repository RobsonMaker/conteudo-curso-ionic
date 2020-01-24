import { Injectable } from '@angular/core';

let configKey = "config";


@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  
 private config ={
   showSlide: false,
   name: "",
   userName: ""
 }


  constructor() { 
  }

  // Recuperar dados do localstorage
  getConfigDate(): any{
    return localStorage.getItem(configKey)  
  }
  // Gravar dados do localstorage
  setCongigDate(showSlide?: boolean, name?: string, userName?: string){
    let config = {
      showSlide: null,
      name: "",
      userName: ""
    };

    if(showSlide){
      config.showSlide = showSlide;
    }

    if(name){
      config.name = name;
    }

    if(userName){
      config.userName = userName;
    }

    localStorage.setItem(configKey, JSON.stringify(config));
  }


}
