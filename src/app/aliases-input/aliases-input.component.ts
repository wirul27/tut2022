import { Component, Input } from '@angular/core';
import { FormControl, FormGroup,FormArray } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-aliases-input',
  templateUrl: './aliases-input.component.html',
  styleUrls: ['./aliases-input.component.css'],
})
export class AliasesInputComponent {
  @Input() aliasesForm!: FormArray;

  constructor(private fb:FormBuilder){

  }

  addAlias() {
    this.aliasesForm.push(this.fb.control(''));
  }

  removeAlias(index:number){
    this.aliasesForm.removeAt(index)
  }

}
