import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsgoMatchDetailsComponent } from './csgo-match-details.component';

describe('CsgoMatchDetailsComponent', () => {
  let component: CsgoMatchDetailsComponent;
  let fixture: ComponentFixture<CsgoMatchDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsgoMatchDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CsgoMatchDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
