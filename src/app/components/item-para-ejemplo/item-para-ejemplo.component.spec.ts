import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemParaEjemploComponent } from './item-para-ejemplo.component';

describe('ItemParaEjemploComponent', () => {
  let component: ItemParaEjemploComponent;
  let fixture: ComponentFixture<ItemParaEjemploComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemParaEjemploComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemParaEjemploComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
