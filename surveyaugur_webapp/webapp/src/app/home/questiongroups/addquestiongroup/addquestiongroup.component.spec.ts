import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddquestiongroupComponent } from './addquestiongroup.component';

describe('AddquestiongroupComponent', () => {
  let component: AddquestiongroupComponent;
  let fixture: ComponentFixture<AddquestiongroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddquestiongroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddquestiongroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
