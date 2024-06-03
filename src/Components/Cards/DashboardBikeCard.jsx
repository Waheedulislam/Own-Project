/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const DashboardBikeCard = ({ bike }) => {
    return (
        <div>
            <div className="card w-auto h-auto  bg-base-100 mb-6 shadow-xl">
                <figure><img className="w-96 h-80" src={bike?.image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        Name : {bike?.title}
                    </h2>
                    <h2 className="card-title">
                        price : {bike?.price} $$
                    </h2>
                    <p className="card-title">Category : {bike?.category}</p>
                    <p>{bike?.description?.length > 30 ? bike?.description?.slice(0, 60) : bike?.description}</p>
                    <div className="flex gap-4 justify-center mt-3">
                        <button className="btn btn-success text-white">Details</button>
                        <Link to={`/dashboard/Edit-products/${bike?.id}`} className="btn btn-primary">Edit</Link>
                        <button className="btn btn-error text-white">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardBikeCard;