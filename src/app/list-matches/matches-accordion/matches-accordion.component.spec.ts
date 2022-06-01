import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchesAccordionComponent } from './matches-accordion.component';

describe('MatchesAccordionComponent', () => {
  let component: MatchesAccordionComponent;
  let fixture: ComponentFixture<MatchesAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchesAccordionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchesAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
