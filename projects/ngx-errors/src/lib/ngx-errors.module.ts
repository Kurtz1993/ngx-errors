import { NgModule } from '@angular/core';
import { NgxErrorDirective } from './ngx-error.directive';
import { NgxErrorsDirective } from './ngx-errors.directive';

const directives = [NgxErrorDirective, NgxErrorsDirective];

@NgModule({
  declarations: [...directives],
  exports: [...directives],
})
export class NgxErrorsModule {}
