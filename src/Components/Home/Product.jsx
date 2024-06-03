import SingleProduct from "./SingleProduct";

const Product = () => {
    return (
        <div>
            <h1 className="text-5xl text-center py-12">Our Products</h1>
            <div className="grid  grid-cols-1 md:grid-cols-1 md:mx-w-full lg:grid-cols-3 justify-items-center lg:gap-2">
                <SingleProduct ></SingleProduct>
                <SingleProduct ></SingleProduct>
                <SingleProduct ></SingleProduct>
                <SingleProduct ></SingleProduct>
                <SingleProduct ></SingleProduct>
            </div>

        </div>
    );
};

export default Product;