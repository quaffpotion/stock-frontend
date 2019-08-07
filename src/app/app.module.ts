import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Material Imports
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
//import { NoopAnimationsModule } from '@angular/platform-browser/animations'; //disable animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SearchContainerComponent } from './search-container/search-container.component';
import { HighlightPipe } from './highlight.pipe';
import { SanitizeHtmlPipe } from './sanitize-html.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SearchContainerComponent,
    HighlightPipe,
    SanitizeHtmlPipe
  ],
  //note, import order matters - must import after BrowserModule
  imports: [
    BrowserModule,
    MatListModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
