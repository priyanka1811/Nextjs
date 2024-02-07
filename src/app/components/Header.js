import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    return (
        <header className="masthead bg-primary text-white text-center">
            <div className="container d-flex align-items-center flex-column">
                <h1 className="masthead-heading text-uppercase mb-0">Start Nextjs</h1>
                <div className="divider-custom divider-light">
                      <div className="divider-custom-line"></div>
                      <div className="divider-custom-icon"><FontAwesomeIcon icon={faStar} /></div>
                      <div className="divider-custom-line"></div>
                </div>
                <p className="masthead-subheading font-weight-light mb-0">Graphic Artist - Web Designer - Illustrator</p>
            </div>
        </header>
    )
};

export default Header;