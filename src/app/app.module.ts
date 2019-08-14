import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SearchContainerComponent } from './search-container/search-container.component';
import { HighlightPipe } from './highlight.pipe';
import { TestDirective } from './test.directive';

@NgModule({
  declarations: [
    AppComponent,
    SearchContainerComponent,
    HighlightPipe,
    TestDirective
  ],
  //note, import order matters - must import after BrowserModule
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
