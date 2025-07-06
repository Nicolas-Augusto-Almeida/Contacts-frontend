import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './Components/contacts/contacts.component';
import { ListComponent } from './Components/list/list.component';

const routes: Routes = [
  { path: 'contacts', component: ListComponent },
  { path: '', component: ListComponent },
  { path: 'newContact', component: ContactsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
