import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ContactsService } from '../../Services/contacts.service';
import { Contact } from '../../contact';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contacts',
  standalone: false,
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent {

  contacts: Contact[] = [];
  formGroupContact: FormGroup;
  editing: boolean = false;

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private service: ContactsService,
    private router: Router
  ) {
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

ngOnInit(): void {
  const idParam = this.route.snapshot.paramMap.get('id');
  const id = Number(idParam);
  console.log('ID recebido na URL:', this.route.snapshot.paramMap.get('id'));

  if (!isNaN(id) && id > 0) {
    this.editing = true;
    this.service.getContactById(id).subscribe({
      next: contact => this.formGroupContact.patchValue(contact),
      error: err => console.error('Erro ao carregar contato:', err)
    });
  }
}

  save(): void {
  const contact = this.formGroupContact.value;

  if (contact.id) {
    this.service.updateContact(contact).subscribe(() => {
      this.router.navigate(['/contatos']);
    });
  } else {
    this.service.saveContact(contact).subscribe(() => {
      this.router.navigate(['/contatos']);
    });
  }
}

  clear() {
    this.formGroupContact.reset();
  }
}