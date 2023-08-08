import "./tagIconButton.scss";

interface IProp {
  icon: string;
  tag: string;
  onClick: () => void;
}

export const TagIconButton = ({ icon, tag, onClick }: IProp) => {
  return (
    <button className="icon-tag-button" onClick={onClick}>
      <img className="icon-pic" src={icon} alt="" />
      {tag}
    </button>
  );
};
