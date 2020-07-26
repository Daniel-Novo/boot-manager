import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidatesRoutingModule } from './candidates-routing.module';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { CandidatesHomeComponent } from './candidates-home/candidates-home.component';
import { CandidatesDetailComponent } from './candidates-detail/candidates-detail.component';
import { CandidatesNewComponent } from './candidates-new/candidates-new.component';
import { CandidatesCvComponent } from './candidates-cv/candidates-cv.component';

@NgModule({
  imports: [
    CommonModule,
    CandidatesRoutingModule,
    OntimizeWebModule
  ],
  declarations: [CandidatesHomeComponent, CandidatesDetailComponent, CandidatesNewComponent, CandidatesCvComponent]
})
export class CandidatesModule { }
