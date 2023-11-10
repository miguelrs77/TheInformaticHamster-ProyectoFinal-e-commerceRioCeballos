import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarSecComponent } from './navbar-sec.component';

describe('NavbarSecComponent', () => {
  let component: NavbarSecComponent;
  let fixture: ComponentFixture<NavbarSecComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarSecComponent]
    });
    fixture = TestBed.createComponent(NavbarSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
