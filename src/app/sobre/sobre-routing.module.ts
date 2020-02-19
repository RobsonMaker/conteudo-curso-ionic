import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SobrePage } from './sobre.page';
import { TabsPage } from '../tabs/tabs.page';

const routes: Routes = [
  {
    path: '',
    component: SobrePage,
    
  },

  
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SobrePageRoutingModule {}