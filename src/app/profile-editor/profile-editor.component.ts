import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css'],
})
export class ProfileEditorComponent {
  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    addresses: [[]],
    address:[{}],
    aliases: [['A','B','C']],
  });

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
    console.log(this.profileForm);
  }

}
