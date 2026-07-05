import { FaClipboardList } from "react-icons/fa";
import "../styles/Header.css";

function Header() {
  return (
    <div className="header">
      <FaClipboardList className="header-icon" />

      <h1>TaskFlow</h1>

      <p>Stay organized. Stay productive.</p>
    </div>
  );
}

export default Header;