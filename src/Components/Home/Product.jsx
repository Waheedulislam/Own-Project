import { useEffect, useState } from "react";
import BikeCardsHome from "../Cards/BikeCardsHome";
import CategoryCard from "../Cards/CategoryCard";

const Product = () => {

    const [bikes, setBikes] = useState([])
    const [categories, setCategories] = useState([])



    useEffect(() => {

        async function load() {
            // bike card details 
            const bikeRes = await fetch('http://localhost:3000/bikes');
            const bikeData = await bikeRes.json()
            setBikes(bikeData)

            // bike categories
            const categoriesRes = await fetch('http://localhost:3000/categories')
            const categoriesData = await categoriesRes.json();
            setCategories(categoriesData)
        }
        load()
    }, [])

    return (
        <div>
            {/* bike card details  */}
            <div>
                <h1 className="text-5xl text-center text-blue-950 font-bold py-12">Our Products</h1>
                <div className="grid  grid-cols-1 md:grid-cols-1 md:mx-w-full lg:grid-cols-3 justify-items-center lg:gap-2">
                    {
                        bikes?.reverse()?.slice(0, 6)?.map(bike => <BikeCardsHome key={bike?.id} bike={bike} />)
                    }
                </div>

            </div>

            {/* bike category */}
            <div>
                <h1 className="text-5xl text-center text-blue-950 font-bold py-12">Our best Bike category</h1>
                <div className="grid  grid-cols-1 md:grid-cols-1 md:mx-w-full lg:grid-cols-3 justify-items-center lg:gap-2">
                    {
                        categories?.map(category => <CategoryCard key={category?.id} category={category} />)
                    }
                </div>

            </div>
        </div>
    );
};

export default Product;