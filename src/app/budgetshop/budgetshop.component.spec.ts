import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetshopComponent } from './budgetshop.component';

describe('BudgetshopComponent', () => {
  let component: BudgetshopComponent;
  let fixture: ComponentFixture<BudgetshopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BudgetshopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
