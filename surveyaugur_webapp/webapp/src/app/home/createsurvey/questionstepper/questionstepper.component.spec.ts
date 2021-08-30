import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionstepperComponent } from './questionstepper.component';

describe('QuestionstepperComponent', () => {
  let component: QuestionstepperComponent;
  let fixture: ComponentFixture<QuestionstepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionstepperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionstepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
