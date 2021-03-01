import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
/* import { AlertModule } from 'ngx-bootstrap'; */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    FormsModule

    /*  AlertModule.forRoot() */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
