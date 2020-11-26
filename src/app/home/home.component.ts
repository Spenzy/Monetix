import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit{
  mxService = {
    assistance: false,
    training: false,
    consulting: false
  };

  constructor(private modalService: NgbModal) {}

  open(content: any): void {
    this.modalService.open(content, {ariaLabelledBy: 'Application Form'});
  }

  ngOnInit(): void {

  }

}
