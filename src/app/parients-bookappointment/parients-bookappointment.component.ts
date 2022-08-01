import { Component, OnInit } from '@angular/core';
import { DoctorDetailsService } from '../services/doctor-details.service';




@Component({
  selector: 'app-parients-bookappointment',
  templateUrl: './parients-bookappointment.component.html',
  styleUrls: ['./parients-bookappointment.component.scss']
})
export class ParientsBookappointmentComponent implements OnInit {
  showdata = this.abc.retrivePassedData()
  constructor(private abc: DoctorDetailsService) { }

  ngOnInit(): void {
    console.log(this.showdata);

  }



}
