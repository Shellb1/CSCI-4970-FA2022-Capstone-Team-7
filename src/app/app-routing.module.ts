import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { EditorComponent } from './editor/editor.component';
import { HomeComponent } from './home/home.component';
import { Editor2Component } from './editor2/editor2.component';
import { Editor3Component } from './editor3/editor3.component';
import { Editor4Component } from './editor4/editor4.component';
const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'editor', component: EditorComponent},
  {path: 'editor2', component: Editor2Component},
  {path: 'editor3', component: Editor3Component},
  {path: 'editor4', component: Editor4Component},
  {path: '**', redirectTo: './editor/web/viewer.html', pathMatch: 'full'},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
