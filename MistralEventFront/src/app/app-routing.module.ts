import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccountComponent } from './components/account/account.component';
import { AgendaComponent } from './components/agenda/agenda.component';
import { CreditComponent } from './components/credit/credit.component';

const routes: Routes = [
  { path: 'account', component: AccountComponent },
  { path: 'credit', component: CreditComponent },
  { path: 'agenda', component: AgendaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
