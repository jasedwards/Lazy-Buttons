import { Injectable } from '@angular/core';
import {Command} from '../command';
import {CommandExecutorService} from '../command-executor.service';

@Injectable()
export class ButtonTwoService implements Command{
  id = 'ButtonTwoService';
  constructor(private executor: CommandExecutorService) {
    executor.addCommand(this);
   }

  execute(folder:any){
    console.log('button 2 is called');
  }
}