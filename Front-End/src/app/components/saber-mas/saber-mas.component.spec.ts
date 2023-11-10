import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaberMasComponent } from './saber-mas.component';

describe('SaberMasComponent', () => {
  let component: SaberMasComponent;
  let fixture: ComponentFixture<SaberMasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaberMasComponent]
    });
    fixture = TestBed.createComponent(SaberMasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
