import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { AboutComponent } from './components/about/about.component';
//Routes
import{RouterModule,Routes} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { GetUsersComponent } from './components/users/get-users/get-users.component';
import { PostUsersComponent } from './components/users/post-users/post-users.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AboutComponent,
    HomeComponent,
    GetUsersComponent,
    PostUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
