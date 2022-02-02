import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R6sMatchDetailsComponent } from './r6s-match-details.component';

describe('R6sMatchDetailsComponent', () => {
  let component: R6sMatchDetailsComponent;
  let fixture: ComponentFixture<R6sMatchDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R6sMatchDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R6sMatchDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
