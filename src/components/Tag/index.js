import "./style.scss";

function Tag({ children }) {
    return (
        <div className="bc__color--primary tag font__color--secondary">
            {children}
        </div>
    );
}

export default Tag;
