import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-daily-feed',
  templateUrl: './daily-feed.component.html',
  styleUrls: ['./daily-feed.component.css']
})
export class DailyFeedComponent implements OnInit {
  listings: Observable<any[]> | undefined;

  constructor(private db: AngularFireDatabase) {}

  ngOnInit(): void {
    this.getListings();
  }

  getListings(): void {
    this.listings = this.db.list('/listings').valueChanges().pipe(
      catchError(error => {
        console.error('Error fetching listings:', error);
        // Return an empty array as fallback data
        return of([]);
      })
    );
  }
}

