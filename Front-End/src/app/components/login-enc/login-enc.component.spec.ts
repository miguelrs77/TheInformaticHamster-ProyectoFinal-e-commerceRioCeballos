import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginEncComponent } from './login-enc.component';

describe('LoginEncComponent', () => {
  let component: LoginEncComponent;
  let fixture: ComponentFixture<LoginEncComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginEncComponent]
    });
    fixture = TestBed.createComponent(LoginEncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
