import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const EditProducts = () => {
    const [categories, setCategories] = useState();
    const { id } = useParams();
    const [bikeDetails, setBikeDetails] = useState();
    console.log(bikeDetails);
    useEffect(() => {
        async function load() {
            // categories data
            const categoriesData = await axios.get(
                "https://own-project-server.onrender.com/bikes"
            );
            if (categoriesData.status == 200) {
                setCategories(categoriesData?.data);
            }

            // bikeData
            const bikeData = await axios.get(`https://own-project-server.onrender.com/bikes/${id}`);
            if (bikeData.status == 200) {
                setBikeDetails(bikeData.data);
            }
        }
        load();
    }, [id]);

    const handleCreateRecipe = async (e) => {
        const token = localStorage.getItem("token");
        e.preventDefault();

        const form = e.target;
        const title = form.title.value;
        const price = form.price.value;
        const description = form.description.value;
        const category = form.category.value;

        const bikeData = {
            title,
            price,
            description,
            category,
        };
        fetch(
            `https://own-project-server.onrender.com/bikes/${id}`,
            {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(bikeData),
            }
        )
            .then((res) => res.json())
            .then((data) => {
                if (data) {
                    console.log(data)
                    alert('Do you want to update your profile?')
                    toast.success("Your Profile Successfully....!")
                }
            });


        // axios Token pass

        // const success = await axios.patch({
        //     baseURL: `https://own-project-server.onrender.com/bikes/${id}`,

        //     headers: {
        //         'Authorization': `Bearer ${token}`
        //     }, bikeData
        // });
        // if (success) {
        //     alert("Do you want to make a product ?");
        // }
        // toast.success("Product Added Successfully....!");

    };
    return (
        <div>
            <h1 className="text-5xl font-bold  py-24">Edit a Product</h1>
            <form onSubmit={handleCreateRecipe}>
                <div className="mb-4">
                    <input
                        type="text"
                        defaultValue={bikeDetails?.title}
                        placeholder="Title"
                        name="title"
                        className="input input-bordered w-full max-w-xs"
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="number"
                        defaultValue={bikeDetails?.price}
                        placeholder="Price"
                        name="price"
                        className="input input-bordered w-full max-w-xs"
                    />
                </div>
                <div className="mb-4">
                    <input
                        name="description"
                        defaultValue={bikeDetails?.description}
                        type="text"
                        placeholder="Description"
                        className="input input-bordered input-lg w-full max-w-xs"
                    />
                </div>
                <div className="mb-4">
                    <select
                        name="category"
                        id=""
                        className="input font-bold input-bordered w-full max-w-xs"
                    >
                        {categories?.map((category) => (
                            <option
                                key={category?.title}
                                selected={category?.title == bikeDetails?.category}
                                value={category?.title}
                            >
                                {category?.title}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="mb-4">
                    <input
                        className="w-full py-5 px-5 border btn btn-neutral"
                        type="submit"
                        value={"Add Recipe"}
                    />
                </div>
            </form>
        </div>
    );
};

export default EditProducts;
