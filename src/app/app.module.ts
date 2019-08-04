import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Material Imports
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
//import { NoopAnimationsModule } from '@angular/platform-browser/animations'; //disable animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SearchStockComponent } from './search-stock/search-stock.component';
import { SearchContainerComponent } from './search-container/search-container.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { TestDirective } from './test.directive';

@NgModule({
  declarations: [
    AppComponent,
    SearchStockComponent,
    SearchContainerComponent,
    SearchResultComponent,
    TestDirective,
  ],
  //note, import order matters - must import after BrowserModule
  imports: [
    BrowserModule,
    MatListModule,
    BrowserAnimationsModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
