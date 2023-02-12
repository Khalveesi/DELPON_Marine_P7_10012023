import { useState } from "react";
import "./style.scss";

function Carousel({ pictures }) {
    const [index, setIndex] = useState(0);
    function next() {
        setIndex((index + 1) % pictures.length);
    }
    function previous() {
        if (index > 0) {
            setIndex(index - 1);
        } else {
            setIndex(pictures.length - 1);
        }
    }
    return (
        <section className="carousel__container">
            <div className="carousel__overlay">
                <div className="carousel__actions">
                    <button
                        className="font__color--secondary"
                        onClick={previous}
                    >
                        <i className="fa-solid fa-chevron-left"></i>
                    </button>
                    <button className="font__color--secondary" onClick={next}>
                        <i className="fa-solid fa-chevron-right"></i>
                    </button>
                </div>
                <div className="carousel__index font__color--secondary">
                    <span>
                        {index + 1} / {pictures.length}
                    </span>
                </div>
            </div>
            <div className="carousel__items">
                {pictures.map((pic, i) => {
                    return (
                        <img
                            key={pic}
                            src={pic}
                            alt=""
                            className="carousel__item"
                            style={{
                                transform: `translateX(calc(${i * 100}% - ${
                                    index * 100
                                }%))`,
                            }}
                        />
                    );
                })}
            </div>
        </section>
    );
}

export default Carousel;
