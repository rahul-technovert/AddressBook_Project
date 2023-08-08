import { ContactCard } from "../contactCard/ContactCard";
import { IContact } from "../../interface/IContact";
import "./contactList.scss";
import { useNavigate } from "react-router-dom";

export const ContactList = ({ contacts }: { contacts: IContact[] }) => {
  const navigate = useNavigate();
  const handleClick = (id: number) => navigate(`/contact/${id}`);
  return (
    <div className="contact-list">
      <h1 className="heading">Contacts</h1>
      <ul className="contacts">
        {contacts.map((contact) => (
          <li
            key={contact.id}
            className="list-item "
            onClick={() => handleClick(contact.id!)}
          >
            <ContactCard contact={contact} />
          </li>
        ))}
      </ul>
    </div>
  );
};
