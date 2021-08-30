import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmaildialogComponent } from './emaildialog.component';

describe('EmaildialogComponent', () => {
  let component: EmaildialogComponent;
  let fixture: ComponentFixture<EmaildialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmaildialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmaildialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
