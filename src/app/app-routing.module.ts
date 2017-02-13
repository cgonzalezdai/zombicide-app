import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { EquipmentCardComponent } from './equipment-card/equipment-card.component';
import { EquipmentCardDetailComponent } from './equipment-card/equipment-card-detail.component';

const routes: Routes = [{
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },{
        path: 'dashboard',
        component: DashboardComponent
      },{
        path: 'equipment-card',
        component: EquipmentCardComponent
      },{
        path: 'equipment-card-detail/:id',
        component: EquipmentCardDetailComponent
      },
    ];
    
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}