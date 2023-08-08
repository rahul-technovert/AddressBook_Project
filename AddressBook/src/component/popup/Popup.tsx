import deleteLogo from "../../assets/delete.svg";
import "./popup.scss";

export const Popup = ({
  onClick,
  message,
  isVisible,
}: {
  onClick: () => void;
  message: string;
  isVisible: boolean;
}) => {
  return (
    <div className={`popup ${isVisible ? "show-popup" : ""} `}>
      <div className="popup-box">
        <div className="image-container">
          <img src={deleteLogo} alt="" />
        </div>
        <p className="message">{message}</p>
        <button onClick={onClick} className="button">
          Okay
        </button>
      </div>
    </div>
  );
};
