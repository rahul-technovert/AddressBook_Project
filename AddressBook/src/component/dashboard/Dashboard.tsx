import { useEffect, useState, createContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { ContactForm } from "../contactForm/ContactForm";
import { ContactList } from "../contactList/ContactList";
import { IContact } from "../../interface/IContact";
import { Menubar } from "../menubar/Menubar";
import { Popup } from "../popup/Popup";
import {
  getContacts,
  addContact,
  updateContact,
  deleteContact
} from "../../services/contactService";
import "./dashboard.scss";

interface IContext {
  getContactById?: (id: number) => IContact | undefined;
  onDeleteContact?: (id: number) => void;
  onClickEditButton?: (id: number) => void;
}
export const ContactContext = createContext<IContext>({});

export const Dashboard = () => {
  const [contacts, setContacts] = useState<IContact[]>([]);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [selectedContact, setSelectedContact] = useState<IContact | null>(null);
  const [isDeletePopupVisible, setIsDeletePopupVisible] =
    useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchContacts = async () => {
      const contactList = await getContacts();
      setContacts([...contactList]);
    }

    fetchContacts()!;

  }, []);

  const getContactById = (id: number) =>
    contacts.find((contact) => contact.id === id);

  const handleDeleteContact =  (id: number) => {
    const filteredContact = contacts.filter((contact) => contact.id !== id);
    setContacts(filteredContact);
    navigate("/", { replace: true });
    toggleDeleteSuccessPopup();
    deleteContact(id);
  };

  const handleEditButton = (id: number) => {
    const contact = { ...contacts.find((contact) => contact.id === id) };
    setSelectedContact(contact as IContact);
    toggleForm();
  };

  const handleSubmitForm = async (contact: IContact) => {
    if (!contact.id) {
      const newContact =await  addContact(contact);
      setContacts([newContact, ...contacts]);
    } else {
      const index = contacts.findIndex((c) => c.id === contact.id);
      const tempContacts = [...contacts];
      tempContacts[index] = contact;
      setContacts(tempContacts);
      await updateContact(contact.id, contact);
    }

    toggleForm();
    setSelectedContact(null);
  };

  const toggleForm = () => setIsFormVisible((prev) => !prev);

  const toggleDeleteSuccessPopup = () =>
    setIsDeletePopupVisible((prev) => !prev);

  const contextValue: IContext = {
    getContactById: getContactById,
    onDeleteContact: handleDeleteContact,
    onClickEditButton: handleEditButton,
  };

  return (
    <>
      <Menubar onAddEmployee={toggleForm} />

      <section className="dashboard">
        <div className="left-side">
          <ContactList contacts={contacts} />
        </div>
        <div className="right-side">
          <ContactContext.Provider value={contextValue}>
            <Outlet />
          </ContactContext.Provider>
        </div>
      </section>

      {isFormVisible && (
        <ContactForm
          onSubmit={handleSubmitForm}
          onCloseForm={() => {
            setSelectedContact(null);
            toggleForm();
          }}
          contact={selectedContact}
        />
      )}

      {isDeletePopupVisible && (
        <Popup
          isVisible={isDeletePopupVisible}
          onClick={toggleDeleteSuccessPopup}
          message="Successfully Deleted"
        />
      )}
    </>
  );
};
