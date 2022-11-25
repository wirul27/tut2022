import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressCVAComponent } from './address-cva.component';

describe('AddressCVAComponent', () => {
  let component: AddressCVAComponent;
  let fixture: ComponentFixture<AddressCVAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddressCVAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddressCVAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
