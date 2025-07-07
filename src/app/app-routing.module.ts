import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './Components/contacts/contacts.component';
import { ListComponent } from './Components/list/list.component';
import { FavoritesComponent } from './Components/favorites/favorites.component';

const routes: Routes = [
  { path: 'List', component: ListComponent },
  { path: '', component: ListComponent },
  { path: 'newContact', component: ContactsComponent },
  { path: 'Contacts/:id', component: ContactsComponent },
  { path: 'favorites', component: FavoritesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
