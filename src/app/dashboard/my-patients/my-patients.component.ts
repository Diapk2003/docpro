import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-patients',
  templateUrl: './my-patients.component.html',
  styleUrls: ['./my-patients.component.scss']
})
export class MyPatientsComponent implements OnInit {


  searchText:string = ''
  constructor() { }

  ngOnInit(): void {
  }
  patientlist=[
    {
      image:'http://azim.commonsupport.com/Docpro/assets/images/resource/patient-1.png',
      patientname:'Mary Astor',
      sex:'Male',
      address:'Flat 20, Reynolds Neck, NY',
      mobileno:'+(22) 65_458_856',
      age:'29 Yrs',
      bloodgroup:'O+',
    },
    {
      image:'http://azim.commonsupport.com/Docpro/assets/images/resource/patient-2.png',
      patientname:'Samuel Daniels',
      sex:'Female',
      address:'Flat 20, Reynolds Neck, NY',
      mobileno:'+(22) 65_458_856',
      age:'27 Yrs',
      bloodgroup:'AB-',
    },
    {
      image:'http://azim.commonsupport.com/Docpro/assets/images/resource/patient-3.png',
      patientname:'Julia Jhones',
      sex:'Female',
      address:'Flat 20, Reynolds Neck, NY',
      mobileno:'+(22) 65_458_856',
      age:'29 Yrs',
      bloodgroup:'O+',
    },
    {
      image:'http://azim.commonsupport.com/Docpro/assets/images/resource/patient-4.png',
      patientname:'Paolo Dybala',
      sex:'Male',
      address:'Flat 20, Reynolds Neck, NY',
      mobileno:'+(22) 65_458_856',
      age:'29 Yrs',
      bloodgroup:'O+',
    },
    {
      image:'http://azim.commonsupport.com/Docpro/assets/images/resource/patient-5.png',
      patientname:'Jean Arthur',
      sex:'Female',
      address:'Flat 20, Reynolds Neck, NY',
      mobileno:'+(22) 65_458_856',
      age:'29 Yrs',
      bloodgroup:'A+',
    },
    {
      image:'http://azim.commonsupport.com/Docpro/assets/images/resource/patient-6.png',
      patientname:'Rex Allen',
      sex:'Male',
      address:'Flat 20, Reynolds Neck, NY',
      mobileno:'+(22) 65_458_856',
      age:'22 Yrs',
      bloodgroup:'AB+',
    },
    {
      image:'http://azim.commonsupport.com/Docpro/assets/images/resource/patient-7.png',
      patientname:'Leroy Anderson',
      sex:'Male',
      address:'Flat 20, Reynolds Neck, NY',
      mobileno:'+(22) 65_458_856',
      age:'32 Yrs',
      bloodgroup:'A-',
    },
    {
      image:'http://azim.commonsupport.com/Docpro/assets/images/resource/patient-8.png',
      patientname:'Amelia Anna',
      sex:'Female',
      address:'Flat 20, Reynolds Neck, NY',
      mobileno:'+(22) 65_458_856',
      age:'27 Yrs',
      bloodgroup:'O+',
    },
    {
      image:'http://azim.commonsupport.com/Docpro/assets/images/resource/patient-9.png',
      patientname:'Terry Bradshaw',
      sex:'Male',
      address:'Flat 20, Reynolds Neck, NY',
      mobileno:'+(22) 65_458_856',
      age:'29 Yrs',
      bloodgroup:'AB-',
    },
    {
      image:'http://azim.commonsupport.com/Docpro/assets/images/resource/patient-10.png',
      patientname:'Bryan Adams',
      sex:'Male',
      address:'Flat 20, Reynolds Neck, NY',
      mobileno:'+(22) 65_458_856',
      age:'42 Yrs',
      bloodgroup:'B+',
    },
    {
      image:'http://azim.commonsupport.com/Docpro/assets/images/resource/patient-11.png',
      patientname:'Fran Allison',
      sex:'Female',
      address:'Flat 20, Reynolds Neck, NY',
      mobileno:'+(22) 65_458_856',
      age:'25 Yrs',
      bloodgroup:'O-',
    },
    {
      image:'http://azim.commonsupport.com/Docpro/assets/images/resource/patient-12.png',
      patientname:'Paul Albert',
      sex:'Male',
      address:'Flat 20, Reynolds Neck, NY',
      mobileno:'+(22) 65_458_856',
      age:'30 Yrs',
      bloodgroup:'AB-',
    },
  ]

  
  
}
