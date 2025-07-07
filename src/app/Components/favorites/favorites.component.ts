import { Component } from '@angular/core';
import { Contact } from '../../contact';

import { ContactsService } from '../../Services/contacts.service';

@Component({
  selector: 'app-favorites',
  standalone: false,
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css'
})
export class FavoritesComponent {
  contacts: Contact[] = [];
  favoriteContacts: Contact[] = [];
  categories: string[] = [];
  filteredContacts: Contact[] = [];
  selectedCategory: string = '';
  searchTerm: string = '';

  constructor(private service: ContactsService
  ) { }

  filterContacts() {
    const term = this.searchTerm.toLowerCase();
    this.filteredContacts = this.contacts.filter(contact =>
      (!this.selectedCategory || String(contact.category) === this.selectedCategory) &&
      (contact.name.toLowerCase().includes(term))
    );
  }

  ngOnInit() {
    this.service.getCategories().subscribe(data => this.categories = data);
    this.service.getContacts().subscribe({
      next: json => {
        this.contacts = json.filter(contact => contact.favorite);
        this.filterContacts();
      }
    });
  }

  getContacts() {
    this.service.getContacts().subscribe({
      next: json => {
        this.contacts = json;
        this.filterContacts();
      }
    });

  }

  delete(contact: Contact) {
    this.service.deleteContact(contact).subscribe({
      next: () => this.getContacts(),
    })
  }


}
