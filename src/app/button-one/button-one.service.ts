import { Injectable } from '@angular/core';
import {Command} from '../command';
import {CommandExecutorService} from '../command-executor.service';

@Injectable()
export class ButtonOneService implements Command{
  id = 'ButtonOneService';
    constructor(private executor: CommandExecutorService) {
    executor.addCommand(this);
   }

  execute(folder:any){
    console.log('button 1 is called');
  }
}