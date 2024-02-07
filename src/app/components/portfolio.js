import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";


const Portfolio = () => {
    const protfolioObj = [
    {
        "id": 1,
        "image":"/img/portfolio/cabin.png"
    },
    {
        "id": 2,
        "image":"/img/portfolio/cake.png"
    },
    {
        "id": 3,
        "image": "/img/portfolio/circus.png"
    },
    {
        "id": 4,
        "image":"/img/portfolio/game.png"
    },
    {
        "id": 5,
        "image":"/img/portfolio/safe.png"
    },
    {
        "id": 6,
        "image":"/img/portfolio/submarine.png"
    }
]
    return (
        <section className="page-section portfolio" id="portfolio">
            <div className="container">
                <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>
                <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><FontAwesomeIcon icon={faStar} /></div>
                    <div className="divider-custom-line"></div>
                </div> 
                <div className="row justify-content-center">
                    {
                        protfolioObj.map((details) => {
                            return (
                                <div className="col-md-6 col-lg-4 mb-5" key={details.id}>
                                    <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target={"#portfolioModal"+details.id}>
                                        <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                            <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                                        </div>
                                        <Image className="img-fluid" src={details.image} width={500} height={500} />
                                    </div>
                                </div>
                            )
                        })
                   }
                </div>
            </div>
        </section> 
    )
};

export default Portfolio;

