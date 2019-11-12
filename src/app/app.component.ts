import { Component, ViewContainerRef, ViewChild } from '@angular/core';
import {LazyLoaderService} from './lazy-loader.service';
import {CommandExecutorService} from './command-executor.service';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
 // @ViewChild('container', {read: ViewContainerRef, static: false}) container: ViewContainerRef;
  name = 'Angular';
  constructor(private loader: LazyLoaderService, private executor: CommandExecutorService){}

  load(){
    // this.container.clear();
    // this.loader.load('lazy-comp', this.container);
    this.executor.init();
  }
}
