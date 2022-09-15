import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciarEstadoComponent } from './gerenciar-estado.component';

describe('GerenciarEstadoComponent', () => {
  let component: GerenciarEstadoComponent;
  let fixture: ComponentFixture<GerenciarEstadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GerenciarEstadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GerenciarEstadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
