import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { AgendaComponent } from '../agenda/agenda.component';
import { FooterComponent } from '../footer/footer.component';
import { CreditComponent } from '../credit/credit.component';
import { AccountComponent } from '../account/account.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './home.component';


@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    SidebarComponent,
    AccountComponent,
    CreditComponent,
    FooterComponent,
    AgendaComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
})
export class HomeModule {}
