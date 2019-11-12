import { Injectable } from '@angular/core';
import {Command} from './command';
@Injectable()
export class RegularCommandService implements Command{
  id = 'RegularCommandService';
  constructor() { }

  execute(folder:any){
    console.log('regular is called');
  }
}