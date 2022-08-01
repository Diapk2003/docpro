import { Component, OnInit } from '@angular/core';
import { Input,Output , EventEmitter } from '@angular/core';
import { RegisterService } from 'src/app/services/register.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-dr-information',
  templateUrl: './dr-information.component.html',
  styleUrls: ['./dr-information.component.scss']
})
export class DrInformationComponent implements OnInit {

  constructor(private registerSrevice:RegisterService, public _d: DomSanitizer) { }
 
  getData= this.registerSrevice.retrivePassedData()
  ngOnInit(): void {
    console.log(this.getData);
  }

  // imgsrc = 'https://c.staticblitz.com/assets/client/components/SideMenu/blitz_logo-11cebad97cad4b50bc955cf72f532d1b.png';

  doctorappointment=[
    {
      image:'http://azim.commonsupport.com/Docpro/assets/images/resource/dashboard-doc-1.png',
      title:'Dr. Amelia Anna',
      description:'Cardiology',
      date:'20 Oct 2020',
      time:'10:30AM',
      bookingdate:'18 Oct, 2020',
      amount:'$150.00',
      status:'Confirm',
      buttonclass:'dr-confirm-button',
    },
    {
      image:'http://azim.commonsupport.com/Docpro/assets/images/resource/dashboard-doc-2.png',
      title:'Dr. Paolo Dybala',
      description:'Dermatology',
      date:'20 Oct 2020',
      time:'10:30AM',
      bookingdate:'18 Oct, 2020',
      amount:'$150.00',
      status:'Confirm',
      buttonclass:'dr-confirm-button ',
    },
    {
      image:'http://azim.commonsupport.com/Docpro/assets/images/resource/dashboard-doc-3.png',
      title:'Dr. Samuel Daniels',
      description:'ACL Surgeon',
      date:'20 Oct 2020',
      time:'10:30AM',
      bookingdate:'18 Oct, 2020',
      amount:'$150.00',
      status:'Cancelled',
      buttonclass:'dr-Cancelled-button',
    },
    {
      image:'http://azim.commonsupport.com/Docpro/assets/images/resource/dashboard-doc-4.png',
      title:'Dr. Julia Jhones',
      description:'Dentist',
      date:'20 Oct 2020',
      time:'10:30AM',
      bookingdate:'18 Oct, 2020',
      amount:'$150.00',
      status:'Confirm',
      buttonclass:'dr-confirm-button',
    },
    {
      image:'http://azim.commonsupport.com/Docpro/assets/images/resource/dashboard-doc-5.png',
      title:'Dr. Mary Astor',
      description:'Orthopedic',
      date:'20 Oct 2020',
      time:'10:30AM',
      bookingdate:'18 Oct, 2020',
      amount:'$150.00',
      status:'Pending',
      buttonclass:'dr-pending-button',
    },
  ]
  


  
}
   