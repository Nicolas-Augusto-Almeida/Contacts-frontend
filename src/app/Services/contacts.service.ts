import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from '../contact';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  save(value: any) {
    throw new Error('Method not implemented.');
  }

  apiUrl = 'http://localhost:8080/contacts';

  constructor(private http: HttpClient) { }

  getContacts() {
    return this.http.get<Contact[]>(this.apiUrl);
  }
  
  saveContact(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(this.apiUrl, contact);
  }

  updateContact(id: number, contact: any) {
    return this.http.put(`${this.apiUrl}/${id}`, contact);
  }

  deleteContact(contact: Contact): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${contact.id}`);
  }
}
