import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { CandidatesCV2RoutingModule } from './candidates-cv2-routing.module';
import { CandidatesCv2HomeComponent } from './candidates-cv2-home/candidates-cv2-home.component';
import { CandidatesCv2DetailsComponent } from './candidates-cv2-details/candidates-cv2-details.component';
import { CandidatesCv2CVComponent } from './candidates-cv2-cv/candidates-cv2-cv.component';

@NgModule({
  imports: [
    OntimizeWebModule,
    CommonModule,
    CandidatesCV2RoutingModule,
    

  ],
  declarations: [CandidatesCv2HomeComponent, CandidatesCv2DetailsComponent, CandidatesCv2CVComponent]
})
export class CandidatesCV2Module { }
