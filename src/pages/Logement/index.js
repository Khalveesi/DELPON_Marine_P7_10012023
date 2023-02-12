import "./style.scss";
import Tag from "../../components/Tag/index.js";
import Accordion from "../../components/Accordion/index.js";
import { useLoaderData } from "react-router-dom";
import Carousel from "../../components/Carsousel";

function Logement() {
    const { logement } = useLoaderData();
    const rating = parseInt(logement.rating);
    const range = [1, 2, 3, 4, 5];
    return (
        <>
            <Carousel pictures={logement.pictures} />
            <section className="logement__informations logement__top-margin">
                <div className="font__color--primary">
                    <div className="logement__block1 gap">
                        <div>
                            <div className="logement__title ">
                                Logement:{logement.title}
                            </div>
                            <div>{logement.location}</div>
                        </div>
                        <div className="logement__tags logement__gap logement__top-margin">
                            {logement.tags.map((tag) => {
                                return <Tag key={tag}>{tag}</Tag>;
                            })}
                        </div>
                    </div>
                </div>
                <div className="font__color--primary logement__block2">
                    <div className="logement__owner logement__gap">
                        {logement.host.name}
                        <img src={logement.host.picture} alt="propriétaire" />
                    </div>
                    <div className="logement__rate logement__top-margin">
                        {range.map((rangeElem, key) =>
                            rating >= rangeElem ? (
                                <i key={key} className="fa-solid fa-star"></i>
                            ) : (
                                <i key={key} className="fa-regular fa-star"></i>
                            )
                        )}
                    </div>
                </div>
            </section>
            <section className="logement__accordion-container">
                <Accordion className="logement__accordion" title="Description">
                    {logement.description}
                </Accordion>
                <Accordion className="logement__accordion" title="Équipements">
                    {logement.equipments.map((element, key) => {
                        return <div key={key}>{element}</div>;
                    })}
                </Accordion>
            </section>
        </>
    );
}

export default Logement;
