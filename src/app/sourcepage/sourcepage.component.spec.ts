import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourcepageComponent } from './sourcepage.component';

describe('SourcepageComponent', () => {
  let component: SourcepageComponent;
  let fixture: ComponentFixture<SourcepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourcepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourcepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
