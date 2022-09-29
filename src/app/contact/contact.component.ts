import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators, } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  userform: FormGroup
  contact: FormArray
  constructor(private fb: FormBuilder) { this.createform() }

  ngOnInit(): void { }

  createform() {
    this.userform = new FormGroup({
      name: new FormControl(""),
      email: new FormControl(""),
      contact: new FormArray([
        new FormGroup({
          Mobileno: new FormControl(""),
        })
      ])
    })
  }

  addmonile() {
    const control = <FormArray>this.userform.controls['contact'];
    control.push(
      new FormGroup({
        Mobileno: new FormControl(""),
      })
    )
  }
  removemobile(index) {
    const control = <FormArray>this.userform.controls['contact'];
    control.removeAt(index);
  }

  save() {
    debugger
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.userform.value, null, 8));
    // console.log(this.userform, "Submit Data Show ");



  }

}
