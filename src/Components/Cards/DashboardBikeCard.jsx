/* eslint-disable react/prop-types */

import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const DashboardBikeCard = ({ bike, oneDelete }) => {
    const handleDelete = async () => {


        const deleteSuccess = await axios.delete(`http://localhost:5000/bikes/${bike?._id}`);
        if (deleteSuccess) {
            alert('Do you want to delete a product ?')

        }
        toast.success("Delete Successfully....!")
        const deleteProduct = oneDelete(bike?._id);
        deleteProduct();


    };
    return (
        <div>
            <div className="card w-80 h-auto  bg-base-100 mb-6 shadow-xl">
                <figure><img className="w-full h-60" src={bike?.image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        Name : {bike?.title}
                    </h2>
                    <h2 className="card-title">
                        Price : {bike?.price} $$
                    </h2>
                    <p className="card-title">Category : {bike?.category}</p>
                    <p>{bike?.description?.length > 30 ? bike?.description?.slice(0, 60) : bike?.description}</p>
                    <div className="flex gap-4 justify-center mt-3">
                        <Link to={`/dashboard/Details-products/${bike?._id}`} className="btn btn-success text-white">Details</Link>
                        <Link to={`/dashboard/Edit-products/${bike?._id}`} className="btn btn-primary">Edit</Link>
                        <button onClick={handleDelete} className="btn btn-error text-white">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardBikeCard;