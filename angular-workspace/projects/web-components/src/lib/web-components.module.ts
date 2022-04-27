import { NgModule } from '@angular/core';
import { WebComponentsComponent } from './web-components.component';
import { defineCustomElements } from '@web-components/loader';
import { DIRECTIVES } from '../../../component-library/src/lib/stencil-generated/index';

defineCustomElements(window);


@NgModule({
  declarations: [
    WebComponentsComponent,
    ...DIRECTIVES
  ],
  imports: [
  ],
  exports: [
    WebComponentsComponent,
    ...DIRECTIVES
  ]
})
export class WebComponentsModule { }
