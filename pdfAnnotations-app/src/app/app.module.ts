import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { EditorComponent } from './editor/editor.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import { MatButtonModule} from '@angular/material/button';
<<<<<<< Updated upstream
import { HomeComponent } from './home/home.component'
=======
import { HomeComponent } from './home/home.component';
import { Editor4Component } from './editor4/editor4.component';
import { Editor3Component } from './editor3/editor3.component';
import { Editor2Component } from './editor2/editor2.component';
import { PdfViewerComponent } from './pdf-viewer/pdf-viewer.component'
>>>>>>> Stashed changes

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    EditorComponent,
<<<<<<< Updated upstream
    HomeComponent
=======
    HomeComponent,
    Editor4Component,
    Editor3Component,
    Editor2Component,
    PdfViewerComponent
>>>>>>> Stashed changes
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    MatMenuModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
