import { IContact } from "../interface/IContact";
import HttpContact from "../apis/ContactApi";

export function getContacts(): Promise<IContact[]> {
  return HttpContact.get();
}

export function deleteContact(id: number) {
  return HttpContact.delete(id);
}

export function updateContact(id : number, contact: IContact) {
  return HttpContact.update(id, contact)
}

export function addContact(contact: IContact): Promise<IContact> {
  return HttpContact.post(contact);
}
