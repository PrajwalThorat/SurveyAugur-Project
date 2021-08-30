import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestiongrouphomeComponent } from './questiongrouphome.component';

describe('QuestiongrouphomeComponent', () => {
  let component: QuestiongrouphomeComponent;
  let fixture: ComponentFixture<QuestiongrouphomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestiongrouphomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestiongrouphomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
