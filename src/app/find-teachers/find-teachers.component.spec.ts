import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindTeachersComponent } from './find-teachers.component';

describe('FindTeachersComponent', () => {
  let component: FindTeachersComponent;
  let fixture: ComponentFixture<FindTeachersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindTeachersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindTeachersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
