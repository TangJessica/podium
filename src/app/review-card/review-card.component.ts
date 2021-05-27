import { Component, Input, NgModule, OnInit } from '@angular/core';

@Component({
  selector: 'app-review-card',
  templateUrl: './review-card.component.html',
  styleUrls: ['./review-card.component.scss']
})


export class ReviewCardComponent implements OnInit {

  @Input()
  author:string;
  @Input()
  body:string;
  @Input()
  date:string;
  @Input()
  stars:number;
  
  ngOnInit() {
    this.stars = Math.round(this.stars)
  }
}
