import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
/* import { AlertModule } from 'ngx-bootstrap'; */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    /*  AlertModule.forRoot() */
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
