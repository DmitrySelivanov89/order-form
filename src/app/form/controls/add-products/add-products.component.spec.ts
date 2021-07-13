import { ComponentFixture, TestBed } from '@angular/core/testing'

import { AddProductsComponent } from './add-products.component'

describe('AddproductsComponent', () => {
  let component: AddProductsComponent
  let fixture: ComponentFixture<AddProductsComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddProductsComponent]
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
