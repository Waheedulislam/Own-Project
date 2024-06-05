import Show from "../Components/Home/Show";
import Carousel from "../Components/Home/Carousel";
import Product from "../Components/Home/Product";
import Review from "../Components/Home/Review";
import Accordion from "../Components/Home/Accordion";
const Home = () => {

    return (
        <div>
            <Carousel />

            <div className="px-16">
                <Product />
                <Show></Show>
                <Accordion></Accordion>
                <Review />
            </div>

        </div>
    );
};

export default Home;