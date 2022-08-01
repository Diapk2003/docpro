import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { RegisterService } from 'src/app/services/register.service';
@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss']
})
export class MenubarComponent implements OnInit {

  constructor(private registerSrevice:RegisterService, public _d: DomSanitizer) { }
  getData= this.registerSrevice.retrivePassedData()
  ngOnInit(): void {
    console.log(this.getData);

  }

  
}
 

// 