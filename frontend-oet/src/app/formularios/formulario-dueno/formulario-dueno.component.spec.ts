import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioDuenoComponent } from './formulario-dueno.component';

describe('FormularioDuenoComponent', () => {
  let component: FormularioDuenoComponent;
  let fixture: ComponentFixture<FormularioDuenoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioDuenoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioDuenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
