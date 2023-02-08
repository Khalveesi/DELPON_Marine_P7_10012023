import "./style.scss";

function Thumb({ title, image }) {
    return (
        <article
            className="thumb"
            style={{
                backgroundImage: `url(${image})`,
            }}
        >
            <div className="thumb__inner">
                <div className="thumb__title font__color--secondary">
                    {title}
                </div>
            </div>
        </article>
    );
}

export default Thumb;
