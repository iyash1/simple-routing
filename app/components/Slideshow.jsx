import Image from "next/image";
import { IMAGE1, IMAGE2, IMAGE3 } from "../config";
import 'bootstrap/dist/css/bootstrap.min.css';

const Slideshow = () => {
    return(
        <div id="carouselExample" className="carousel slide m-5">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <Image src={IMAGE1} className="d-block w-100" width={100} height={1000} style={{height: "auto"}} alt="slide1" priority={true} />
                </div>
                <div className="carousel-item">
                    <Image src={IMAGE2} className="d-block w-100" width={100} height={1000} style={{height: "auto"}} alt="slide2" priority={true}/>
                </div>
                <div className="carousel-item">
                    <Image src={IMAGE3} className="d-block w-100" width={100} height={1000} style={{height: "auto"}} alt="slide3" priority={true}/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default Slideshow;