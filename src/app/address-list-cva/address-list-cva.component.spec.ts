import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressListCVAComponent } from './address-list-cva.component';

describe('AddressListCVAComponent', () => {
  let component: AddressListCVAComponent;
  let fixture: ComponentFixture<AddressListCVAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddressListCVAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddressListCVAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
