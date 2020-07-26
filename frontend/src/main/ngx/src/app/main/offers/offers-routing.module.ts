import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OffersHomeComponent } from './offers-home/offers-home.component';
import { OffersNewComponent } from './offers-new/offers-new.component';
import { OffersDetailsComponent } from "./offers-details/offers-details.component";

const routes: Routes = [{
  path: '',
  component: OffersHomeComponent
},
{
  path: "new",
  component: OffersNewComponent
},
{
  path: ':ID',
  component: OffersDetailsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OffersRoutingModule { }
