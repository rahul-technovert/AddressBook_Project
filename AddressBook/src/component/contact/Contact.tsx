import { useContext } from "react";
import editIcon from "../../assets/edit1.jpg";
import deleteIcon from "../../assets/delete1.png";
import { ContactContext } from "../dashboard/Dashboard";
import { useParams } from "react-router-dom";
import { TagIconButton } from "../tagIconButton/TagIconButton";
import "./contact.scss";

export const Contact = () => {
  const { getContactById, onDeleteContact, onClickEditButton } =
    useContext(ContactContext);
  const { id } = useParams();
  const intId = id ? parseInt(id) : null;
  const contact = intId && getContactById!(intId);

  if (!contact) return <div>No contact is found</div>;

  return (
    <div className="contact">
      <div className="name-container">
        <p className="name"> {contact?.name} </p>
        <ul className="options">
          <li>
            <TagIconButton
              icon={editIcon}
              tag="Edit"
              onClick={() => onClickEditButton!(intId)}
            />
          </li>
          <li>
            <TagIconButton
              icon={deleteIcon}
              tag="Delete"
              onClick={() => onDeleteContact!(intId)}
            />
          </li>
        </ul>
      </div>
      <p className="email">{`Email : ${contact.email}`}</p>
      <div className="contact-numbers">
        <p className="mobile">{`Phone : +91 ${contact.mobile}`}</p>
        <p className="landline">{`Landline : ${contact.landline}`}</p>
      </div>
      <p className="website">{`Website : ${contact.website}`} </p>
      <div className="address-container">
        <p className="address-heading">Address : </p>
        <p className="address">{`${contact.address}`}</p>
      </div>
    </div>
  );
};
