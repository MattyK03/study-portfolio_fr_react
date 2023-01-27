import "./header.css"

const Header = () => {
  return (
    <header className="header">
        <div className="container header__wrapper">
            <div className="header__title">
                <h1>
                    Hi, my name is <span className="my__name">Matvey</span>
                </h1>
                <h2>a frontend developer</h2>
            </div>

            <div className="header__subtitle">
                <p>with passion for learning and creating.</p>
            </div>

            <a className="header__button" href="https://github.com/MattyK03" target="_blank" rel="noreferrer">
                My github
            </a>
        </div>
    </header>
  );
};

export default Header;
