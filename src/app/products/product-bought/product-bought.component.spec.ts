import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductBoughtComponent } from './product-bought.component';

describe('ProductBoughtComponent', () => {
  let component: ProductBoughtComponent;
  let fixture: ComponentFixture<ProductBoughtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductBoughtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductBoughtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
