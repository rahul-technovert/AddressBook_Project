import { IContact } from "../../interface/IContact";
import "./contactCard.scss";

export const ContactCard = ({ contact }: { contact: IContact }) => {
  return (
    <div className="contact-card">
      <p className="name">{contact.name}</p>
      <p className="email">{contact.email}</p>
      <p className="phone">{"+91 " + contact.mobile}</p>
    </div>
  );
};
