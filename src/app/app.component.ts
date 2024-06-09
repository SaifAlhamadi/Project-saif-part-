import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationsService } from './notifications.service';
import { NgModule } from '@angular/core';
import { DailyFeedComponent } from './daily-feed/daily-feed.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Your App Title'; // Define a title property

  constructor(public notificationsService: NotificationsService) {}

  ngOnInit() {
    this.notificationsService.requestPermission();
  }
}

@NgModule({
  declarations: [
    AppComponent,
    DailyFeedComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    // Your providers
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
