import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { DoctorDetailsService } from 'src/app/services/doctor-details.service';



@Component({
  selector: 'app-rex-allen',
  templateUrl: './rex-allen.component.html',
  styleUrls: ['./rex-allen.component.scss']
})

export class RexAllenComponent implements OnInit {

  appointment: FormGroup
  pushdata: any = []
  constructor(private formbuilder: FormBuilder , private service: DoctorDetailsService) {
    this.appointment = this.formbuilder.group({
      date: [''],
      tiem: [''],
      New_Patient_Visit_$40: [''],
      General_Consultation_$50: [''],
      Back_Pain_$60: [''],
      Diabetes_Consultation_$35: [''],

    })
  }

  ngOnInit(): void {
    // this.chos =[
    //   {
    //    id: 1,
    //    title:'New Patient Visit $40',
    //    checked: false
    //    },
    //   {
    //    id: 2,
    //    title:'General Consultation $50',
    //    checked: false
    //    },
    //   {
    //    id: 3,
    //    title:'Back Pain $60',
    //    checked: false
    //    },
    //   {
    //    id: 4,
    //    title:'Diabetes Consultation  $35',
    //    checked: false
    //    }
    // ]
  }

  appointmentSubmit() {
    this.pushdata.push(this.appointment.value)
    this.service.setData(this.pushdata)
  }
}
