import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccountComponent } from './components/account/account.component';
import { CreditComponent } from './components/credit/credit.component';

const routes: Routes = [
  { path: 'account', component: AccountComponent },
  { path: 'credit', component: CreditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
