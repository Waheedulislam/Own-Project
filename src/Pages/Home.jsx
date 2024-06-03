import Accordion from "../Components/Home/Accordion";
import Show from "../Components/Home/Show";
import Carousel from "../Components/Home/Carousel";
import Categorie from "../Components/Home/Categorie";
import Product from "../Components/Home/Product";
import Review from "../Components/Home/Review";

const Home = () => {
    return (
        <div>
            <Carousel />
            <Categorie />

            <div className="px-16">
                <Product />
                <Show></Show>
                <Accordion />
                <Review />
            </div>

        </div>
    );
};

export default Home;