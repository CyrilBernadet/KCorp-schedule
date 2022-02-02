import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LolMatchDetailsComponent } from './lol-match-details.component';

describe('LolMatchDetailsComponent', () => {
  let component: LolMatchDetailsComponent;
  let fixture: ComponentFixture<LolMatchDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LolMatchDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LolMatchDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
