import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioConductorComponent } from './formulario-conductor.component';

describe('FormularioConductorComponent', () => {
  let component: FormularioConductorComponent;
  let fixture: ComponentFixture<FormularioConductorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioConductorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioConductorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
