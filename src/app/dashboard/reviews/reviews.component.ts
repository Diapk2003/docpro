import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReviewPatientService } from 'src/app/services/review-patient.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {

  getData = this.reviewSer.retrivePassedData()
  
  constructor(private reviewSer: ReviewPatientService, private router: Router) { }

  ngOnInit(): void {
    // console.log(this.getData, "gatdata");
    
  }
   
}
