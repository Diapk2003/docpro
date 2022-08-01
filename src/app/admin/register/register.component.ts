import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  fore = []
  data:any = []
  imgsrc:any
  formdata! :FormGroup
  constructor(private formbuilder: FormBuilder,private registerService:RegisterService,private router:Router,public _d: DomSanitizer) { }
// imgsrc = 'https://c.staticblitz.com/assets/client/components/SideMenu/blitz_logo-11cebad97cad4b50bc955cf72f532d1b.png';
  ngOnInit(): void {

    this.formdata = this.formbuilder.group({
      drName: [''],
      drDegree: [''], 
      drMobileno: [''],
      clinicName: [''],
      clinicAddress: [''],
      fileUpload:[''],
    })
  }

  submit() {
     this.data.push(this.formdata.value)
    this.registerService.setData(this.data)
    this.formdata.reset();
    // alert("success data send !!")
    this.router.navigate(['/logindoctor'])
    // console.log(this.formdata);
      
    
  }

  fileChange(e:any) {
    const file = e.srcElement.files[0]; 
    this.imgsrc = window.URL.createObjectURL(file); 
    this.formdata.value.fileUpload = this.imgsrc

  }




}
