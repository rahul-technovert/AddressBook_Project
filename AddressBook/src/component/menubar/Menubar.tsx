import { Link } from "react-router-dom";
import blogIcon from "../../assets/blog-icon.png";
import "./menubar.scss";

export const Menubar = ({ onAddEmployee }: { onAddEmployee: () => void }) => {
  return (
    <section className="menubar">
      <ul className="menus">
        <li>
          <Link className="link" to="/">
            Home
          </Link>
        </li>
        <li>
          <button className="add-btn" onClick={onAddEmployee}>
            +Add
          </button>
        </li>
      </ul>
      <div className="blog-icon-container">
        <img className="blog-icon" src={blogIcon} alt="" />
      </div>
    </section>
  );
};
