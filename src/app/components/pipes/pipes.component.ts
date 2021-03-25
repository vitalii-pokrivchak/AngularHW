import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  price: number = 200;
  percent: number = 206;
  date: Date = new Date();
  text: string = "Hello World";

  allValues = {
    price: this.price,
    percent: this.percent,
    date: this.date,
    text: this.text
  }
  constructor() { }

  ngOnInit(): void {
  }

}
