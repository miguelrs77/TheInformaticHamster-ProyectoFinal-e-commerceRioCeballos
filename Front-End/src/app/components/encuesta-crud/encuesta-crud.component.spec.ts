import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncuestaCrudComponent } from './encuesta-crud.component';

describe('EncuestaCrudComponent', () => {
  let component: EncuestaCrudComponent;
  let fixture: ComponentFixture<EncuestaCrudComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EncuestaCrudComponent]
    });
    fixture = TestBed.createComponent(EncuestaCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
