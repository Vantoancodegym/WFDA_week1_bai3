import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-front-size',
  templateUrl: './front-size.component.html',
  styleUrls: ['./front-size.component.scss']
})
export class FrontSizeComponent implements OnInit {
  frontSize = 14;
  constructor() { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  setSize(size){
    this.frontSize = size;
  }

}
