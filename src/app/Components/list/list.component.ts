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
  formGroupContact: FormGroup;

  constructor(private service: ContactsService,
    private formBuilder: FormBuilder
  ){
    this.formGroupContact = this.formBuilder.group({
      id: [null],
      name: [''],
      email: [''],
      phone: [''],
      address: [''],
      birthday: [''],
      company: [''],
      title: [''],
      favorite: [false],
      category: ['']
    });
  }

  ngOnInit() {
    this.getContacts();
  }

  getContacts(){
    this.service.getContacts().subscribe({
      next: json => this.contacts = json
    });
  }

  delete(contact: Contact){
    this.service.deleteContact(contact).subscribe({
      next: () => this.getContacts(),
    })
  }

  
}
