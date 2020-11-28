import { Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';


@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.scss']
})

export class FormModalComponent implements OnInit{
  mxService = {
    assistance: false,
    training: false,
    consulting: false
  };

  constructor(private fb: FormBuilder) {
  }

  form = this.fb.group({
    fName: ['', [Validators.required, Validators.minLength(2), Validators.pattern('^[_A-z0-9]*((-|\s)*[_A-z0-9])*$')]],
    lName: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
    company: ['', [Validators.required]],
    uPhone: ['', [Validators.required, Validators.maxLength(13), Validators.pattern('^[0-9]+$')]],
    uMsg: ['', [Validators.required]]
  });

  ngOnInit(): void {

  }
  onSubmit(): boolean {
    if (!this.form.valid) {
      alert('Please fill all the required fields!');
      return false;
    }
    console.log(this.form.value);
    return true;
  }

}
