import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrInformationComponent } from 'src/app/dashboard/dr-information/dr-information.component';
import { FooterComponent } from 'src/app/admin/footer/footer.component';
import { FilterPipe } from 'src/app/pipe/filter.pipe';
import { FormsModule } from '@angular/forms';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    DrInformationComponent,
    FooterComponent,
    FilterPipe,



  ],
  imports: [
    CommonModule,
    
  ],
  exports:[
    DrInformationComponent,
    FooterComponent,
    FilterPipe,
    FormsModule,
    

  

  ],
})
export class SharedModule { }
