import "./style.scss";
import { NavLink } from "react-router-dom";
import Logo from "../Logo";

function Header() {
    function applyActiveClassName({ isActive }) {
        return isActive ? "link__active" : undefined;
    }
    return (
        <header>
            <Logo size={32} className="font__color--primary" />
            <nav className="font__color--primary">
                <NavLink to="/" className={applyActiveClassName}>
                    Accueil
                </NavLink>
                <NavLink to="/about" className={applyActiveClassName}>
                    A propos
                </NavLink>
            </nav>
        </header>
    );
}

export default Header;
