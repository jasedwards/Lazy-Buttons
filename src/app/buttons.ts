import { NgModuleFactory, Type, InjectionToken } from '@angular/core';
import {Command} from './command';


export const buttons: { name: string, loadChildren: () => Promise<NgModuleFactory<any> | Type<any>> }[] = [
  {
    name: 'Button1',
    loadChildren: () => import('./button-one/button-one.module').then(m => m.ButtonOneModule)
  },
   {
    name: 'Button2',
    loadChildren: () => import('./button-two/button-two.module').then(m => m.ButtonTwoModule)
  }
]

export function buttonArrayToObj() {
  const result = {};
  for (const w of buttons) {
    result[w.name] = w.loadChildren;
  }
  return result;
}