import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CofiguracoesPageRoutingModule } from './cofiguracoes-routing.module';

import { CofiguracoesPage } from './cofiguracoes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CofiguracoesPageRoutingModule
  ],
  declarations: [CofiguracoesPage]
})
export class CofiguracoesPageModule {}
