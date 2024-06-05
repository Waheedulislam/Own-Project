import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const AddProducts = () => {
    const [categories, setCategories] = useState();

    useEffect(() => {
        async function load() {
            const data = await axios.get('http://localhost:3000/categories')
            if (data.status == 200) {
                setCategories(data?.data)
            }
        }
        load();
    }, [])

    const handleCreateRecipe = async (e) => {
        const token = localStorage.getItem("token");
        e.preventDefault();

        const form = e.target;
        const title = form.title.value;
        const price = form.price.value;
        const description = form.description.value;
        const image = form.image.value;
        const category = form.category.value;

        const bikeData = {
            title,
            price,
            description,
            image,
            category
        };
        fetch(
            'https://own-project-server.onrender.com/bikes',
            {
                method: "POST",
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
                    alert('Do you want to make a product ?')
                    toast.success("Product Added Successfully....!")
                }
            });
        // const success = await axios.post('https://own-project-server.onrender.com/bikes', bikeData);
        // if (success) {
        //     alert('Do you want to make a product ?')
        // }
        // toast.success("Product Added Successfully....!")
        form.reset();
    }
    return (
        <div>
            <h1 className="text-5xl font-bold  py-24">Add a  Product</h1>
            <form onSubmit={handleCreateRecipe}>
                <div className="mb-4">
                    <input type="text"
                        required
                        placeholder="Title"
                        name='title'
                        className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="mb-4">
                    <input type="number"
                        required
                        placeholder="Price"
                        id="price"
                        className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="mb-4">
                    <input
                        name="description"
                        type="text"
                        required
                        placeholder="Description"
                        className="input input-bordered input-lg w-full max-w-xs" />
                </div>
                <div className="mb-4">
                    <select name="category"
                        required
                        id=""
                        className="input font-bold input-bordered w-full max-w-xs">
                        {
                            categories?.map(category => <option key={category} value={category?.title}>{category?.title}</option>)
                        }
                    </select>
                </div>
                <div className="mb-4">
                    <input
                        name="image"
                        type="text"
                        required
                        placeholder="Image_Url"
                        className="input input-bordered input-lg w-full max-w-xs" />
                </div>

                <div className="mb-4">
                    <input
                        className="w-full py-5 px-5 border btn btn-neutral"
                        type="submit"
                        value={'Add Recipe'}
                    />

                </div>
            </form>
        </div>
    );
};

export default AddProducts;