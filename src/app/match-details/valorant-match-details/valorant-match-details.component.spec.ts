import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValorantMatchDetailsComponent } from './valorant-match-details.component';

describe('ValorantMatchDetailsComponent', () => {
  let component: ValorantMatchDetailsComponent;
  let fixture: ComponentFixture<ValorantMatchDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValorantMatchDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValorantMatchDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
