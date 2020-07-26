import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OffersRoutingModule } from './offers-routing.module';
import { OffersHomeComponent } from './offers-home/offers-home.component';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { OffersDetailsComponent } from './offers-details/offers-details.component';
import { OffersNewComponent } from './offers-new/offers-new.component';

@NgModule({
  imports: [
    CommonModule,
    OffersRoutingModule,
    OntimizeWebModule
  ],
  declarations: [OffersHomeComponent, OffersDetailsComponent, OffersNewComponent]
})
export class OffersModule { }
