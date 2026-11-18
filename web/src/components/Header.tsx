import NavIcon from "./NavIcon";
import "./Header.css"

type HeaderProps = {
  onProfileClick: () => void;
};

export default function Header({ onProfileClick }: HeaderProps) {
  return (
    <header className="site-header">
      <a className="wordmark" href="#" aria-label="Playbilld home">
        Playbilld<span>.</span>
      </a>
      <button
        className="profile-button"
        type="button"
        aria-label="Open profile"
        onClick={onProfileClick}
      >
        <NavIcon name="profile" />
      </button>
    </header>
  );
}