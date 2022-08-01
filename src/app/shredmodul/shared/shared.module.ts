import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrInformationComponent } from 'src/app/dashboard/dr-information/dr-information.component';
import { FooterComponent } from 'src/app/admin/footer/footer.component';


@NgModule({
  declarations: [
    DrInformationComponent,
    FooterComponent


  ],
  imports: [
    CommonModule,
    
  ],
  exports:[
    DrInformationComponent,
    FooterComponent
  

  ],
})
export class SharedModule { }
