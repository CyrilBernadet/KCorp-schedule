import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RlMatchDetailsComponent } from './rl-match-details.component';

describe('RlMatchDetailsComponent', () => {
  let component: RlMatchDetailsComponent;
  let fixture: ComponentFixture<RlMatchDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RlMatchDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RlMatchDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
