import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestiongroupsComponent } from './questiongroups.component';

describe('QuestiongroupsComponent', () => {
  let component: QuestiongroupsComponent;
  let fixture: ComponentFixture<QuestiongroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestiongroupsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestiongroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
