import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../_service/firebase.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  applicationList: any;
  values: any;

  constructor(private fbs: FirebaseService) {
    this.applicationList = this.fbs.readUser();
  }

  test(): void{
    this.applicationList.subscribe((value: any) => this.values = value);
  }

  ngOnInit(): void {
  }

}
