

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { NotificationsService } from './notifications.service';
import { DailyFeedComponent } from './daily-feed/daily-feed.component';

@NgModule({
  declarations: [
    AppComponent,
    DailyFeedComponent
  ],
  imports: [
    BrowserModule,
    CommonModule
    // Add other imported modules if needed
  ],
  providers: [
    NotificationsService // Add your service provider here
    // Add other service providers if needed
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
