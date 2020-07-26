import { Component, OnInit, ViewChild,AfterContentChecked } from '@angular/core';
import { OTextInputComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'app-candidates-cv2-details',
  templateUrl: './candidates-cv2-details.component.html',
  styleUrls: ['./candidates-cv2-details.component.scss']
})
export class CandidatesCv2DetailsComponent implements OnInit, AfterContentChecked {

  constructor() { }

  ngAfterContentChecked():void{
    this.id=this.idcurriculum.getValue()

  }
  @ViewChild('ids') idcurriculum: OTextInputComponent
  id:string

  ngOnInit() {
  }

}
