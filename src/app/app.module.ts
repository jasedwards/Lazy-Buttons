import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {provideRoutes} from '@angular/router';
import {lazyWidgets, lazyArrayToObj} from './lazy-widgets';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { LazyCompComponent } from './lazy-comp/lazy-comp.component';
import { LazyLoaderService } from './lazy-loader.service';
import {LAZY_WIDGETS} from './tokens';
import { CommandExecutorService } from './command-executor.service';
import { RegularCommandService } from './regular-command.service';
import {buttons, buttonArrayToObj, commandButton} from './buttons';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ],
  providers: [{provide: commandButton, useClass: RegularCommandService, multi: true},
   LazyLoaderService,  provideRoutes(buttons), CommandExecutorService, RegularCommandService]
})
export class AppModule { }
