import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAlimentosComponent } from './edit-alimentos.component';

describe('EditAlimentosComponent', () => {
  let component: EditAlimentosComponent;
  let fixture: ComponentFixture<EditAlimentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAlimentosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAlimentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
