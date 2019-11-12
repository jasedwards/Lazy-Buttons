import { InjectionToken } from '@angular/core';
import {Command} from './command';
export const LAZY_WIDGETS = new InjectionToken<{ [key: string]: string }>('LAZY_WIDGETS');

export const commandButton = new InjectionToken<Command>('commandButton');