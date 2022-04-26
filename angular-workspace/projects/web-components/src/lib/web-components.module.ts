import { NgModule } from '@angular/core';
import { WebComponentsComponent } from './web-components.component';
import { defineCustomElements} from  '@web-components/loader';
import { MyComponent} from '../../../component-library/src/lib/stencil-generated/components'

defineCustomElements(window);

@NgModule({
  declarations: [
    WebComponentsComponent,
    MyComponent
  ],
  imports: [
  ],
  exports: [
    WebComponentsComponent,
    MyComponent
  ]
})
export class WebComponentsModule { }
