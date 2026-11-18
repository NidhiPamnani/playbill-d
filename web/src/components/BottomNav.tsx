import type { NavName } from "../types";
import NavIcon from "./NavIcon";
import "./BottomNav.css"

type BottomNavProps = {
  active: NavName;
  onChange: (item: NavName) => void;
};

const items: NavName[] = ["home", "diary", "profile"];

export default function BottomNav({ active, onChange }: BottomNavProps) {
  return (
    <nav className="bottom-nav" aria-label="Main navigation">
      {items.map((item) => (
        <button
          key={item}
          className={active === item ? "active" : ""}
          type="button"
          aria-current={active === item ? "page" : undefined}
          onClick={() => onChange(item)}
        >
          <NavIcon name={item} />
          <span>{item[0].toUpperCase() + item.slice(1)}</span>
        </button>
      ))}
    </nav>
  );
}