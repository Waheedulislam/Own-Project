import photo1 from "../../../public/upcoming-ktm-bikes-in-2023-new-models-updates-to-old-models-etc-scaled.jpg";
import photo2 from '../../../public/maxresdefault.jpg'
import photo3 from '../../../public/0021218.jpeg'

const Carousel = () => {
    return (
        <div>
            <div className="carousel w-full  ">
                <div id="slide1" className="carousel-item h-2/5 relative w-full">
                    <img src={photo1} className="w-full " />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={photo2} className="w-full " />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full ">
                    <img src={photo3} className="w-full " />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carousel;