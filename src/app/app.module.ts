import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports: [AppComponent],
  providers: [],
  entryComponents: [AppComponent]
})
export class AppModule {

  constructor(private injector: Injector) {
    const el = createCustomElement(AppComponent, { injector });
    console.log(customElements.get('app-b'));
    if (!customElements.get('app-b')) {
      customElements.define('app-b', el);
    }
  }

  ngDoBootstrap() { }

}
