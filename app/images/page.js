import Slideshow from "../components/Slideshow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPanorama
} from "@fortawesome/free-solid-svg-icons";

const Images = () => {
    return (
      <div className="d-flex flex-column">
        <h3 className="align-self-center mt-3">
          <FontAwesomeIcon icon={faPanorama} className="mx-3"/>Image Slideshow
        </h3>
        <Slideshow />
      </div>
    );
}

export default Images;