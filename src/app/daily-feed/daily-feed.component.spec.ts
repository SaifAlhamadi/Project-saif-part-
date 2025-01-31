import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyFeedComponent } from './daily-feed.component';

describe('DailyFeedComponent', () => {
  let component: DailyFeedComponent;
  let fixture: ComponentFixture<DailyFeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DailyFeedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DailyFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
