import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  username: string=''
  password: string=''
  constructor(private router: Router, private formbulider: FormBuilder) { }


  ngOnInit(): void {
    this.form = this.formbulider.group({
      username: ['doc'],
      password: ['123']
    })
  }
  
  login() {
    const username =this.form.value.username
    const password=this.form.value.password

    if(username === this.username && password === this.password){
      console.log(this.form);
    this.router.navigate(['./admin'])
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

