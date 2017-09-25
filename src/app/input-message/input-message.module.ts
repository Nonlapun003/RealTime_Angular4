import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InputMessageComponent} from './input-message.component';
import { FormsModule }   from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    FormsModule

  ],
  declarations: [InputMessageComponent],
  exports: [
    InputMessageComponent,
    CommonModule,
    FormsModule
  ]
})
export class InputMessageModule { }
