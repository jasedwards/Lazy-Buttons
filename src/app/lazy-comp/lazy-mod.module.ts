import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LazyCompComponent} from './lazy-comp.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LazyCompComponent],
  entryComponents: [LazyCompComponent]
})
export class LazyModModule {
  static entry = LazyCompComponent;
}
