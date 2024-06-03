/* eslint-disable react/prop-types */

const BikeCardsHome = ({ bike }) => {
    return (
        <div>
            <div className="card w-96 bg-base-100 mb-6 shadow-xl">
                <figure><img className="w-96 h-80" src={bike?.image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        Name : {bike?.title}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <h2 className="card-title">
                        price : {bike?.price} $$
                    </h2>
                    <p>{bike?.description?.length > 30 ? bike?.description?.slice(0, 30) : bike?.description}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">{bike?.category}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BikeCardsHome;