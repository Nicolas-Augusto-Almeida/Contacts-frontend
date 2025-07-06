import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contacts',
  standalone: false,
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent{
 
  formGroupContact: FormGroup;

  constructor(private formBuilder: FormBuilder) {
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
}
