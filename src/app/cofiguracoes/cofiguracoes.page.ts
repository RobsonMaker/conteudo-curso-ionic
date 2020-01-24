import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-cofiguracoes',
  templateUrl: './cofiguracoes.page.html',
  styleUrls: ['./cofiguracoes.page.scss'],
})
export class CofiguracoesPage implements OnInit {
 
  

  constructor(private router: Router, private menuCtr: MenuController) { }

  ngOnInit() {
  }

  openPerfil(){
    this.router.navigate(['/perfil']);
  }
  openAbout(){
    this.router.navigate(['/sobre']);
  }

  openMenu() {
    this.menuCtr.toggle();
  }

}
