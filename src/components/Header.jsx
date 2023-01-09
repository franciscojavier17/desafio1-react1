const Header = ({title = "Titulo"}) => {
    return(
        <header className="principal-header">
            <h1 className="title-header">{title}</h1>
        </header>
    );
};

export default Header;