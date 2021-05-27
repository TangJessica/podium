// import {Injectable} from '@angular/core'
// import {HttpClient} from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable()
// export class ReviewService{
//     constructor(private http: HttpClient) {}
//     fetchReview(): Observable<Object>{
//         return this.http.get('shakespeareApp/src/data.ts')
//     }
// }
import {Injectable} from '@angular/core'

import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
// @Component({
//   selector: 'app-show-api',
//   templateUrl: './show-api.component.html',
//   styleUrls: ['./show-api.component.css']
// })
@Injectable()
export class ReviewService implements OnInit { 
  li:any;
  lis=[];
  constructor(private http : HttpClient){   
}
  ngOnInit(): void {
    this.http.get('https://shakespeare.podium.com/api/reviews')
    .subscribe(Response => {
      console.log(Response)
      this.li=Response;
      this.lis=this.li.list;
    });
  }}
// The url of api is passed to get() and then subscribed and 
// stored the response to li element data array lis[] is created 
// using JSON element property