import { useState } from "react";
import "./style.scss";

function Accordion({ children, title, openDefault = true, className = "" }) {
    const [isOpen, setIsOpen] = useState(openDefault);
    return (
        <div
            className={["accordion", className, isOpen ? "open" : "close"].join(
                " "
            )}
        >
            <div
                className=" bc__color--primary font__color--secondary accordion__title"
                onClick={() => setIsOpen(!isOpen)}
                tabIndex="0"
                onKeyUp={(evt) => {
                    if (evt.key === "Enter") {
                        setIsOpen(!isOpen);
                    }
                }}
            >
                {title}
                <i className="fa-solid fa-chevron-down chevron"></i>
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
