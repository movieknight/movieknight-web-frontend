import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventRecommendComponent } from './event-recommend.component';

describe('EventRecommendComponent', () => {
  let component: EventRecommendComponent;
  let fixture: ComponentFixture<EventRecommendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventRecommendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventRecommendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
