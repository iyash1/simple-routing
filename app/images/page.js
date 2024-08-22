import Slideshow from "../components/Slideshow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPanorama
} from "@fortawesome/free-solid-svg-icons";

const Images = () => {
    return (
      <div className="d-flex flex-column">
        <h3 className="fs-1 fw-bold text-center m-3">
          ~ Image<FontAwesomeIcon icon={faPanorama} className="mx-3" />
          Slideshow ~
        </h3>
        <Slideshow />
      </div>
    );
}

export default Images;