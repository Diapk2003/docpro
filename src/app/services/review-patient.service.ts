import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReviewPatientService {

  allPassedData:any = []
  constructor() { }


  setData(data:any){
    this.allPassedData.push(data)
    
  }

  retrivePassedData(){
    return this.allPassedData
  }
}
