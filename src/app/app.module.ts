import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { AboutComponent } from './components/about/about.component';
//Routes
import{RouterModule,Routes} from '@angular/router';
const routes: Routes = [
  {
    path:'',
    component:AppComponent
  },
  {
    path:'about',
    component:AboutComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
