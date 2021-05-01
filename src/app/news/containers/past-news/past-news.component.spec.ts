import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastNewsComponent } from './past-news.component';

describe('PastNewsComponent', () => {
  let component: PastNewsComponent;
  let fixture: ComponentFixture<PastNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PastNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
