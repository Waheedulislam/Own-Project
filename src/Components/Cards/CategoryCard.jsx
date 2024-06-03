/* eslint-disable react/prop-types */

const CategoryCard = ({ category }) => {
    return (
        // <div>
        //     <div className="card w-96 bg-base-100 shadow-xl">
        //         <div className="card-body text-center">
        //             <h2 className="card-title ">{category?.title}</h2>
        //         </div>
        //     </div>
        // </div>
        <div className="lg:px-5 lg:py-3 sm:px-2 sm:py-1 pb-5">

            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <div className="card-actions justify-end">
                    </div>
                    <h1 className="text-3xl text-center">{category?.title}</h1>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;