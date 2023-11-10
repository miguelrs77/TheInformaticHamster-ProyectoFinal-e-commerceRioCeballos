import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInEncComponent } from './sign-in-enc.component';

describe('SignInEncComponent', () => {
  let component: SignInEncComponent;
  let fixture: ComponentFixture<SignInEncComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignInEncComponent]
    });
    fixture = TestBed.createComponent(SignInEncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
