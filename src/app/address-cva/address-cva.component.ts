import { Component, forwardRef, OnInit } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormBuilder,
  FormGroup,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-address-cva',
  templateUrl: './address-cva.component.html',
  styleUrls: ['./address-cva.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AddressCVAComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => AddressCVAComponent),
      multi: true,
    },
  ],
})
export class AddressCVAComponent implements ControlValueAccessor, Validator {
  addressForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.addressForm = this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['', Validators.required],
    });
  }

  onTouched: () => void = () => {};

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    return this.addressForm.invalid ? { required: true, feild: 'Zip' } : null;
  }

  writeValue(obj: any): void {
    console.log(obj);
    this.addressForm.patchValue(obj);
    console.log(this.addressForm)
  }
  registerOnChange(fn: any): void {

    this.addressForm.valueChanges.subscribe(fn);
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {}
}
