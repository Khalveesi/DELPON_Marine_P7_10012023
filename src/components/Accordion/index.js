import { useState } from "react";
import "./style.scss";

function Accordion({ children, title, openDefault = true, className = "" }) {
    const [isOpen, setIsOpen] = useState(openDefault);
    return (
        <div className={["accordion", className].join(" ")}>
            <div
                className=" bc__color--primary font__color--secondary accordion__title"
                onClick={() => setIsOpen(!isOpen)}
            >
                {title}
            </div>
            {isOpen && (
                <div className="accordion__content font__color--primary">
                    {children}
                </div>
            )}
        </div>
    );
}

export default Accordion;
