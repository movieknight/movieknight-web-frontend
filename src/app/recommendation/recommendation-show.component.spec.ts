import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendationShowComponent } from './recommendation-show.component';

describe('RecommendationShowComponent', () => {
  let component: RecommendationShowComponent;
  let fixture: ComponentFixture<RecommendationShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecommendationShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommendationShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
