import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material';
import {AppComponent} from './app.component';
import {Ng2FilterPipeModule} from 'ng2-filter-pipe';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatCheckboxModule,
    Ng2FilterPipeModule
  ],
  exports: [
    MatCheckboxModule,
    Ng2FilterPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
