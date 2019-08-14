/*
 * Public API Surface of ngx-errors
 */
import { AbstractControl } from '@angular/forms';

export type ErrorOptions = string | string[];

export interface ErrorDetails {
  control: AbstractControl;
  errorName: string;
}

export * from './lib/ngx-errors.module';
