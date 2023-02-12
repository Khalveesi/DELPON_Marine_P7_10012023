import "./style.scss";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function NotFound({ title }) {
    useEffect(() => {
        document.title = title;
    });
    return (
        <section className="not-found-section">
            <span className="font__color--primary error">404</span>
            <span className="font__color--primary error-message">
                Oups! La page que vous demandez n'existe pas.
            </span>

            <Link className=" font__color--primary home-link" to="/">
                Retourner à la page d'accueil
            </Link>
        </section>
    );
}

export default NotFound;
