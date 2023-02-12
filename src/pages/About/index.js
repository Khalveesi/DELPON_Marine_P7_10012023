import "./style.scss";
import Accordion from "../../components/Accordion";
import backgroundAbout from "../../assets/background-about.png";
import { useEffect } from "react";

function About({ title }) {
    useEffect(() => {
        document.title = title;
    });
    return (
        <>
            <section
                className="about__banner"
                style={{ backgroundImage: `url(${backgroundAbout})` }}
            ></section>
            <section className="about__accordions">
                <Accordion title="Fiablité">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse non magna vulputate, laoreet ex in, venenatis
                    risus. Phasellus consequat magna sed rhoncus commodo. Sed
                    quis turpis quis ante tempor iaculis. Nam in accumsan turpis
                    fusce.
                </Accordion>
                <Accordion title="Fiablité">bonjour</Accordion>
                <Accordion title="Fiablité">bonjour</Accordion>
                <Accordion title="Fiablité">bonjour</Accordion>
            </section>
        </>
    );
}

export default About;
