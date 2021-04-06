import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.scss']
})
export class PetComponent implements OnInit {
  name = 'Dog';
  image = 'https://ielts-thanhloan.com/wp-content/uploads/2020/11/5200.jpg';

  constructor() { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  setName(name){
    this.name = name;
  }
  // tslint:disable-next-line:typedef
  setImage(image){
    this.image = image;
  }

}
