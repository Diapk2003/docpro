import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookappointment',
  templateUrl: './bookappointment.component.html',
  styleUrls: ['./bookappointment.component.scss']
})
export class BookappointmentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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


}
