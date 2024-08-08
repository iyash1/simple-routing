import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faStickyNote, faRectangleList, faImages } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary bg-primary">
        <div className="container-fluid">
            <Link className="navbar-brand" href="/"><FontAwesomeIcon icon={faHouse} className="mx-2"/></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" href="/notes"><FontAwesomeIcon icon={faStickyNote} className="mx-2"/>Notes</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" href="/form"><FontAwesomeIcon icon={faRectangleList} className="mx-2"/>Form</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" href="/images"><FontAwesomeIcon icon={faImages} className="mx-2"/>Images</Link>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    </>
  );
}

export default Header;
