import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailsProduct = () => {
    const { id } = useParams();
    console.log(id)
    const [bikeDetails, setBikeDetails] = useState();
    console.log(bikeDetails)
    useEffect(() => {
        async function load() {
            const bikeData = await axios.get(`https://own-project-server.vercel.app/bikes/${id}`)
            if (bikeData?.status == 200) {
                setBikeDetails(bikeData?.data)
            }
        }
        load();
    }, [id])
    return (
        <div>
            <div className="hero  ">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={bikeDetails?.image} className="w-96 h-96 rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold flex">Name : <h4 className="text-3xl py-3 pl-2">{bikeDetails?.title}</h4></h1>
                        <h6 className="text-3xl font-bold flex">
                            Price :  <p className=" text-2xl py-1 pl-2">{bikeDetails?.price}</p>
                        </h6>
                        <h6 className="text-3xl font-bold">Category : {bikeDetails?.category}</h6>
                        <p className="py-6">{bikeDetails?.description}</p>
                        <button className="btn btn-primary">Buy Product</button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DetailsProduct;