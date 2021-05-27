import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ReviewCardComponent } from './review-card/review-card.component';
import { HttpClientModule } from '@angular/common/http';
import { ReviewService } from './review.service';
import { TokenInterceptor  } from './api-interceptor.service';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReviewCardComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxStarRatingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [ReviewService, TokenInterceptor ],
  bootstrap: [AppComponent]
})
export class AppModule { }
