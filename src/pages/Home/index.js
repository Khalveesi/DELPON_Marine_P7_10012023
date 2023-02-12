import "./style.scss";
import Thumb from "../../components/Thumb";
import backgroundHome from "../../assets/background-home.png";
import { useLoaderData, Link } from "react-router-dom";

function Home() {
    const { logements } = useLoaderData();
    return (
        <>
            <section
                className="home__banner"
                style={{ backgroundImage: `url(${backgroundHome})` }}
            >
                <div className="home__banner--inner">
                    <span className="font-size font__color--secondary">
                        Chez vous, partout et ailleurs
                    </span>
                </div>
            </section>
            <section className="logements-card">
                {logements.map((logement) => {
                    return (
                        <Link key={logement.id} to={`/logement/${logement.id}`}>
                            <Thumb
                                title={logement.title}
                                image={logement.cover}
                            />
                        </Link>
                    );
                })}
            </section>
        </>
    );
}

export default Home;
