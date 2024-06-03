import axios from "axios";
import { useEffect, useState } from "react";
import DashboardBikeCard from "../../Components/Cards/DashboardBikeCard";

const AllProducts = () => {
    const [bikes, setBikes] = useState();

    useEffect(() => {
        async function load() {
            const data = await axios.get('http://localhost:3000/bikes')

            if (data?.status == 200) {
                setBikes(data?.data)
            }
        }
        load()
    }, [])
    const handleDeleteBike = (id) => {
        setBikes(bikes.filter((bike) => bike.id !== id));
    }
    return (
        <div>
            {/* bike card details  */}
            <div>
                <h1 className="text-5xl text-center py-12">Manage All Products</h1>
                <div className="grid px-5  grid-cols-1 md:grid-cols-1 md:mx-w-full lg:grid-cols-3 justify-items-center lg:gap-2">
                    {
                        bikes?.map(bike => <DashboardBikeCard key={bike?.id} bike={bike} oneDelete={handleDeleteBike} />)
                    }
                </div>

            </div>
        </div>
    );
};

export default AllProducts;