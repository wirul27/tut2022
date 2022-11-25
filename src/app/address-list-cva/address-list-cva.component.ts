import { Component, forwardRef, OnInit } from '@angular/core';
import {
  ControlValueAccessor,
  FormArray,
  FormBuilder,
  FormGroup,
  NG_VALUE_ACCESSOR,
  Validators,
} from '@angular/forms';
import { TitleStrategy } from '@angular/router';

@Component({
  selector: 'app-address-list-cva',
  templateUrl: './address-list-cva.component.html',
  styleUrls: ['./address-list-cva.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AddressListCVAComponent),
      multi: true,
    },
  ],
})
export class AddressListCVAComponent implements OnInit, ControlValueAccessor {
  addressListForm: FormArray

  constructor(private fb: FormBuilder) {
    this.addressListForm = this.fb.array([]);
  }

  ngOnInit(): void {
    // this.addAddress()
  }
  onTouched: () => void = () => {};

  writeValue(obj: any): void {
    console.log(obj);
    (obj as Array<any>).forEach(()=>this.addAddress())
    this.addressListForm.patchValue(obj);
  }
  registerOnChange(fn: any): void {
    this.addressListForm.valueChanges.subscribe(fn);
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }

  addAddress() {
    this.addressListForm.push(this.newAddressForm())
    // this.addressListForm.push(this.fb.group({ street: 'kohong' }));
  }

  removeAddress(index: number) {
    this.addressListForm.removeAt(index);
  }

  newAddressForm():FormGroup{
    return this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['', Validators.required],
    });
  }
}
