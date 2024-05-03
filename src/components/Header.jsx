import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <ul>
        <Link className="link" to="/register">
          <li>Register</li>
        </Link>
        <Link className="link" to="/login">
          <li>Login</li>
        </Link>
      </ul>
    </header>
  );
};

export default Header;
