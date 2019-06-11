import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxEduComponentsComponent } from './ngx-edu-components.component';

describe('NgxEduComponentsComponent', () => {
  let component: NgxEduComponentsComponent;
  let fixture: ComponentFixture<NgxEduComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxEduComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxEduComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
