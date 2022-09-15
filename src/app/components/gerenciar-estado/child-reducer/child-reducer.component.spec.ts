import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildReducerComponent } from './child-reducer.component';

describe('ChildReducerComponent', () => {
  let component: ChildReducerComponent;
  let fixture: ComponentFixture<ChildReducerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildReducerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildReducerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
