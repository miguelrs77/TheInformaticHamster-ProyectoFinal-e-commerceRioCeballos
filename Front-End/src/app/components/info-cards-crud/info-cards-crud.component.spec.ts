import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCardsCrudComponent } from './info-cards-crud.component';

describe('InfoCardsCrudComponent', () => {
  let component: InfoCardsCrudComponent;
  let fixture: ComponentFixture<InfoCardsCrudComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoCardsCrudComponent]
    });
    fixture = TestBed.createComponent(InfoCardsCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
