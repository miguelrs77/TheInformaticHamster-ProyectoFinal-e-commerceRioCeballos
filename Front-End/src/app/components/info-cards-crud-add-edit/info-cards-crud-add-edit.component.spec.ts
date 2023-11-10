import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCardsCrudAddEditComponent } from './info-cards-crud-add-edit.component';

describe('InfoCardsCrudAddEditComponent', () => {
  let component: InfoCardsCrudAddEditComponent;
  let fixture: ComponentFixture<InfoCardsCrudAddEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoCardsCrudAddEditComponent]
    });
    fixture = TestBed.createComponent(InfoCardsCrudAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
