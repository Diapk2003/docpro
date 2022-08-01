import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../services/register.service';
@Component({
  selector: 'app-login-doctor',
  templateUrl: './login-doctor.component.html',
  styleUrls: ['./login-doctor.component.scss']
})
export class LoginDoctorComponent implements OnInit {
  getData= this.registerSrevice.retrivePassedData()
  constructor(private router: Router, private formbulider: FormBuilder ,private registerSrevice:RegisterService) { }
  form!: FormGroup;
  username: string=''
  password: string=''

  ngOnInit(): void {
    this.form = this.formbulider.group({
      username: ['docpro'],
      password: ['123']
    })
  }
  login() {
    const username =this.form.value.username
    const password=this.form.value.password

    if(username === this.username && password === this.password){
      console.log(this.form);
    this.router.navigate(['/dashbord/dr-information'])
    alert('Login Successful')
    }else{
      alert('Username Password Invalid')
    }
    
  }

  method_username(e:any){
    this.username = e.target.value
  }
  method_password(e:any){
    this.password = e.target.value
  }

  
}


