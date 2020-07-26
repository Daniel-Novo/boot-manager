import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CandidatesHomeComponent } from './candidates-home/candidates-home.component';
import { CandidatesDetailComponent } from './candidates-detail/candidates-detail.component';
import { CandidatesNewComponent } from './candidates-new/candidates-new.component';
import { CandidatesCvComponent} from './candidates-cv/candidates-cv.component';

const routes: Routes = [{
  path: '',
  component: CandidatesHomeComponent
},
{
  path: "new",
  component: CandidatesNewComponent
},
{
  path: ':ID/new',
  component: CandidatesCvComponent
},
{
  path: ':ID',
  component: CandidatesDetailComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CandidatesRoutingModule { }
