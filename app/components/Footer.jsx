import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import "@fortawesome/fontawesome-svg-core/styles.css";


const Footer = () => {
    return (
        <div className="container">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <div className="col-md-4 d-flex align-items-center">
                    <span className="mb-3 mb-md-0 text-muted">&copy; 2024 Yashwanth Eturi</span>
                </div>

                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li className="ms-3">
                        <Link className="text-muted" href="https://www.x.com" target="_">
                            <FontAwesomeIcon icon={faXTwitter} />
                        </Link>
                    </li>
                    <li className="ms-3">
                        <Link className="text-muted" href="https://www.instagram.com" target="_">
                            <FontAwesomeIcon icon={faInstagram} size="lg" />
                        </Link>
                    </li>
                    <li className="ms-3">
                        <Link className="text-muted" href="https://www.facebook.com" target="_">
                            <FontAwesomeIcon icon={faFacebook} size="lg" />
                        </Link>
                    </li>
                </ul>
            </footer>
        </div>
    );
}

export default Footer;
