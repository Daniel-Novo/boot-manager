import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from 'ontimize-web-ngx';

import { MainComponent } from './main.component';
import { HomeModule } from './home/home.module';
import { CandidatesModule } from "./candidates/candidates.module";
import { OffersModule } from './offers/offers.module';

import { CandidatesCV2Module} from './candidates-cv2/candidates-cv2.module';

export function loadHomeModule() {
  return HomeModule;
}

export function loadCandidatesModule() {
  return CandidatesModule;
}

export function loadOffersModule() {
  return OffersModule
}
export function loadCandidatesCv2Module(){
  return CandidatesCV2Module;
}



export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivate: [AuthGuardService],
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        loadChildren: loadHomeModule
      }, {
        path: 'candidates',
        loadChildren: loadCandidatesModule
      },
      {
        path: 'offers',
        loadChildren: loadOffersModule
      },
    
      {
        path: 'candidates-cv2',
        loadChildren: loadCandidatesCv2Module
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
