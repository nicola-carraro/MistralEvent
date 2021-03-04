import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
/* import { AlertModule } from 'ngx-bootstrap'; */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AccountComponent } from './components/account/account.component';
import { CreditComponent } from './components/credit/credit.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './components/footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    AccountComponent,
    CreditComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
   /*  AlertModule.forRoot() */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
