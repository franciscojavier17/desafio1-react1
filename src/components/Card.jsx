const Card = ({ imgUrl = "", cardDesc = "Descripción de Card", cardTitle = "Titulo de Card", textBtn='Text' }) => {
    return (
        <div className="card" >
            <img src={imgUrl} className="card-img-top" alt="img-aleatoria" />
            <div className="card-body">
                <h5 className="card-title">{cardTitle}</h5>
                <p className="card-text">{cardDesc}</p>
                <a href="#" className="btn btn-primary">{textBtn}</a>
            </div>
        </div>
    );
};

export default Card;