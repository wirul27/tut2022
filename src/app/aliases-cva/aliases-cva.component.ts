import { Component, forwardRef, OnInit } from '@angular/core';
import {
  ControlValueAccessor,
  FormArray,
  FormBuilder,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Component({
  selector: 'app-aliases-cva',
  templateUrl: './aliases-cva.component.html',
  styleUrls: ['./aliases-cva.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AliasesCVAComponent),
      multi: true,
    },
  ],
})
export class AliasesCVAComponent implements OnInit, ControlValueAccessor {
  aliasesForm: FormArray;
  constructor(private fb: FormBuilder) {
    this.aliasesForm = this.fb.array([]);
  }

  ngOnInit(): void {
    // this.addAlias()
  }

  onTouched: () => void = () => {};

  writeValue(obj: any): void {
    console.log(obj);
    (obj as Array<any>).forEach(()=>this.addAlias())
    this.aliasesForm.patchValue(obj);
  }
  registerOnChange(fn: any): void {
    this.aliasesForm.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }

  addAlias() {
    this.aliasesForm.push(this.fb.control(''));
  }

  removeAlias(index: number) {
    this.aliasesForm.removeAt(index);
  }
}
