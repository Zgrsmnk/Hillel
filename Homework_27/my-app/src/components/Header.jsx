import Link from "./Link";
import ChangeThemeButton from "./ChangeThemeButton";

const Header = () => {
  return (
    <div className="container">
      <h1>Header</h1>
      <nav>
        <ul className="list">
          <li className="listItem">
            <Link href="/" >Головна</Link>
          </li>
          <li className="listItem">
            <Link href="/contacts" >Контакти</Link>
          </li>
          <li className="listItem">
            <Link href="/about-me" >Про мене</Link>
          </li>
        </ul>
      </nav>
      <ChangeThemeButton/>
    </div>
  );
};

export default Header;
