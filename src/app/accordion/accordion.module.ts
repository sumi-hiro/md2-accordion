import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Md2AccordionModule } from '../../../node_modules/md2-accordion';

import { AccordionComponent } from './accordion.component';

@NgModule({
  imports: [
    CommonModule,
    Md2AccordionModule
  ],
  declarations: [
    AccordionComponent
  ],
  exports: [
    AccordionComponent
  ]
})
export class AccordionModule { }
