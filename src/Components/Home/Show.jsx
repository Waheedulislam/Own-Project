import photoKTvs from '../../../public/tvs-ronin.jpeg'

const Show = () => {
    return (
        <div className="mt-16 ">
            <h1 className="text-center font-bold text-blue-950 text-5xl my-5">Latest New Bike</h1>
            <div className=" hero min-h-screen  mt-10">

                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img className=" w-2/4" src={photoKTvs} />
                    <div>
                        <h1 className="text-5xl text-blue-950 font-bold">TVS-Ronin</h1>
                        <p className="py-6">This Bike is powered by 220 Cc, which generates a maximum power of 20.12 Bhp @ 7750 rpm, and its maximum torque is 19.30 Nm @ 3750 rpm. Tvs Ronin mileage is City 35 Kmpl (Approx.) and on highway 40 Kmpl (Approx.). It has a Dual Channel ABS Braking system with Tubeless tyres. Seat Height is 795mm, and Weight is 160 KG. Top Speed is 120 KMPH (Approx.) .</p>
                        <button className="btn bg-blue-950 text-white">Get Started</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Show;