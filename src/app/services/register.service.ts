import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  allPassedData:any = []

  constructor( ) {}



  setData(data:any){
    this.allPassedData = data;
  }

  retrivePassedData(){
    return this.allPassedData
  }
  
}
