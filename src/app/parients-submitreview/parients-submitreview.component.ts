import { Component, OnInit ,  VERSION  } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ReviewPatientService } from '../services/review-patient.service';




@Component({
  selector: 'app-parients-submitreview',
  templateUrl: './parients-submitreview.component.html',
  styleUrls: ['./parients-submitreview.component.scss']
})
export class ParientsSubmitreviewComponent implements OnInit {
  // name = "Angular " + VERSION.major;
  submitdata : FormGroup
  datapush: any = []
  constructor(private formbulider: FormBuilder, private reviewSer:ReviewPatientService, private router:Router){

  }


  ngOnInit(): void {
    this.submitdata = this.formbulider.group({
      Rating:[''],
      Title: [''],
      Yourname: [''],
      Youremail:[''],
      Yourreview:[''],
      iaccept:['']
    })
  } 

submit(){
  // this.datapush.push(this.submitdata.value)
  this.reviewSer.setData(this.submitdata.value)
  this.submitdata.reset();  
  this.router.navigate(["/dashbord/reviews"])

}

}

