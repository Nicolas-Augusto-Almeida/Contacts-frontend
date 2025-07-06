import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ContactsService } from '../../Services/contacts.service';
import { Contact } from '../../contact';

@Component({
  selector: 'app-contacts',
  standalone: false,
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent {
  
  contacts: Contact[]= [];
  formGroupContact: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private service: ContactsService
  ) {
    this.formGroupContact = this.formBuilder.group({
      id: [''],
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

  save() {
    this.service.saveContact(this.formGroupContact.value).subscribe(
      {
        next: json => {
          this.contacts.push(json);
          this.formGroupContact.reset();
        }
      }
    );
  }

  clear(){
    this.formGroupContact.reset();
  }
}