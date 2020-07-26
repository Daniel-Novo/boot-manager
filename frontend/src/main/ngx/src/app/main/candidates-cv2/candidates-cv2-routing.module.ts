import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CandidatesCv2HomeComponent} from './candidates-cv2-home/candidates-cv2-home.component';
import { CandidatesCv2DetailsComponent} from './candidates-cv2-details/candidates-cv2-details.component';
import {CandidatesCv2CVComponent} from './candidates-cv2-cv/candidates-cv2-cv.component';
const routes: Routes = [{
  path: '',
  component: CandidatesCv2HomeComponent
},
{
  path:':ID/curriculum/:ID',
  component: CandidatesCv2CVComponent


},
{
  path: ':ID',
  component: CandidatesCv2DetailsComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CandidatesCV2RoutingModule { }
