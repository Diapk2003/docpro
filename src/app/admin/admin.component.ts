import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {

  }

  register(){
    this.router.navigate(['register'])
  }

  process=[
    {
      image:'http://azim.commonsupport.com/Docpro/assets/images/icons/icon-5.png',
      num:'01',
      name:'Search Best Online Professional',
      description:'Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod ex tempor incididunt.',
      border:'show',
    },
    {
      image:'http://azim.commonsupport.com/Docpro/assets/images/icons/icon-6.png',
      num:'02',
      name:'View Professional Profile',
      description:'Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod ex tempor incididunt.',
      border:'show',
    },
    {
      image:'http://azim.commonsupport.com/Docpro/assets/images/icons/icon-7.png',
      num:'03',
      name:'Get Instant Doctor Appoinment',
      description:'Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod ex tempor incididunt.',
      border:'',
    }
  ]

reg(){
  this.router.navigate(['register'])
}

Doctors(){
  this.router.navigate(['/dashbord/dr-information'])
}

}
