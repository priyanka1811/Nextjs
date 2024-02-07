import Image from 'next/image'
import Header from './components/Header'
import Form from './components/Form'
import Footer from './components/Footer'
import Portfolio from './components/portfolio'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <>
          <Header />
          <Portfolio />
          <section className="page-section bg-primary text-white mb-0" id="about">
            <div className="container">
              <h2 className="page-section-heading text-center text-uppercase text-white">About</h2>
              <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
              </div>
              <div className="row">
                  <div className="col-lg-4 ms-auto"><p className="lead">Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p></div>
                  <div className="col-lg-4 me-auto"><p className="lead">You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p></div>
              </div>
              <div className="text-center mt-4">
                  <a className="btn btn-xl btn-outline-light" href="https://startbootstrap.com/theme/freelancer/">
                      <i className="fas fa-download me-2"></i>
                      Free Download!
                  </a>
              </div>
            </div>
      </section>
      <Form />
      <Footer />
      <div className="copyright py-4 text-center text-white">
            <div className="container"><small>Copyright &copy; Your Website {new Date().getFullYear() }</small></div>
        </div>
    </>
  )
}
