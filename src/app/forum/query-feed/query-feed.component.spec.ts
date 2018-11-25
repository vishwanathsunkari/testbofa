import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryFeedComponent } from './query-feed.component';

describe('QueryFeedComponent', () => {
  let component: QueryFeedComponent;
  let fixture: ComponentFixture<QueryFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueryFeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
