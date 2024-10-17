import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EuroPipe } from './pipes/euro.pipe';



@NgModule({
  declarations: [
    EuroPipe
  ],
  exports: [
    EuroPipe
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
