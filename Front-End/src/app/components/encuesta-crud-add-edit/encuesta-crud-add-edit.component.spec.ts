import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncuestaCrudAddEditComponent } from './encuesta-crud-add-edit.component';

describe('EncuestaCrudAddEditComponent', () => {
  let component: EncuestaCrudAddEditComponent;
  let fixture: ComponentFixture<EncuestaCrudAddEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EncuestaCrudAddEditComponent]
    });
    fixture = TestBed.createComponent(EncuestaCrudAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
