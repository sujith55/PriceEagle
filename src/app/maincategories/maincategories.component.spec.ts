import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaincategoriesComponent } from './maincategories.component';

describe('MaincategoriesComponent', () => {
  let component: MaincategoriesComponent;
  let fixture: ComponentFixture<MaincategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaincategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaincategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
