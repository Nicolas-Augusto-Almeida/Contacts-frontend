import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from '../contact';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {


  apiUrl = 'http://localhost:8080/contacts';

  constructor(private http: HttpClient) { }

  getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.apiUrl);
  }

  getContactById(id: number): Observable<Contact> {
    return this.http.get<Contact>(`${this.apiUrl}/${id}`);
  }

  saveContact(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(this.apiUrl, contact);
  }

  updateContact(contact: Contact) : Observable<Contact> {
    return this.http.put<Contact>(`${this.apiUrl}/${contact.id}`, contact);
  }

  deleteContact(contact: Contact): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${contact.id}`);
  }
}
