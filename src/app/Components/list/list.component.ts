import { Component } from '@angular/core';
import { Contact } from '../../contact';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ContactsService } from '../../Services/contacts.service';

@Component({
  selector: 'app-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  contacts: Contact[] = [];
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
    this.getContacts();
    this.service.getCategories().subscribe(data => this.categories = data);
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
