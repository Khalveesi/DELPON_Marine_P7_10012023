import "./style.scss";
import Logo from "../Logo";

function Footer() {
    return (
        <footer>
            <Logo size={30} className="font__color--secondary" />
            <span className="font__color--secondary">
                © 2020 Kasa. All rights reserved
            </span>
        </footer>
    );
}

export default Footer;
