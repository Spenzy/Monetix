import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../_service/firebase.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  private applicationList: any;
  values: any;
  profile: any;

  constructor(private fbs: FirebaseService) {

  }

  updateProfile(i: number): void{
    console.log(i);
    this.profile = this.values[i];
    console.log(this.profile);
  }

  ngOnInit(): void {
    this.applicationList = this.fbs.readUser();
    this.applicationList.subscribe((value: any) => this.values = value);
  }

}
