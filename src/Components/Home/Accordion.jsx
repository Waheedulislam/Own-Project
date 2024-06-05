import photoKtm from '../../../public/ktm.jpg'
const Accordion = () => {
    return (

        <div>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={photoKtm} className=" w-2/4" />
                    <div>
                        <h1 className="text-5xl font-bold">KTM rc200..!</h1>
                        <p className="py-6">KTM RC 200 price in Bangladesh is TK 5,45,000 (Expected price). This Bike is powered by 200cc, which generates a maximum power of 24.60 PS @ 10000 rpm, and its maximum torque is 19.20 Nm @ 8000.00 rpm. KTM RC 200 mileage in city is 30 Kmpl (Approx.).</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Accordion;