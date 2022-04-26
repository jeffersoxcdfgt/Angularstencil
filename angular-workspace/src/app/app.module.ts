import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { WebComponentsModule} from '../../projects/web-components/src/lib/web-components.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    WebComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
