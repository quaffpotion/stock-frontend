import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
