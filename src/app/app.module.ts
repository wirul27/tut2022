import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AddressInputComponent } from './address-input/address-input.component';
import { AliasesInputComponent } from './aliases-input/aliases-input.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { AddressCVAComponent } from './address-cva/address-cva.component';
import { AliasesCVAComponent } from './aliases-cva/aliases-cva.component';
import { AddressListCVAComponent } from './address-list-cva/address-list-cva.component';

@NgModule({
  declarations: [
    AppComponent,
    NameEditorComponent,
    ProfileEditorComponent,
    AddressInputComponent,
    AliasesInputComponent,
    AddressCVAComponent,
    AliasesCVAComponent,
    AddressListCVAComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule,FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
