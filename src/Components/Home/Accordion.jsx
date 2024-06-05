
const Accordion = () => {
    return (
        <div className="flex">
            <div className="pt-16 w-2/4">
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title text-xl font-medium">
                        Yamaha YZF-R15
                    </div>
                    <div className="collapse-content">
                        <p>The Yamaha YZF-R15 is a single-cylinder sport bike made by Yamaha Motor Company in 2008. In September 2011, the second iteration, called v2.0, was released in India, and in April 2014 it was released in Indonesia. In January 2017, the bikes third iteration .</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        Suzuki Gixxer 150
                    </div>
                    <div className="collapse-content">
                        <p>The Suzuki Gixxer FI 150 is a 154.9 cc naked motorcycle from Suzuki. The bike was launched in September 2014. The name derives from a nickname used in Britain and elsewhere for Suzuki GSX-S150 because of similarity in design. However Gixxer and GSX-S150 are completely different bikes</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        KTM rc200
                    </div>
                    <div className="collapse-content">
                        <p>KTM RC 200 price in Bangladesh is TK 5,45,000 (Expected price). This Bike is powered by 200cc, which generates a maximum power of 24.60 PS @ 10000 rpm, and its maximum torque is 19.20 Nm @ 8000.00 rpm. KTM RC 200 mileage in city is 30 Kmpl (Approx.).</p>
                    </div>
                </div>
            </div>
            <div>
                <img src='../../../public/ktm.jpg' alt="" />
            </div>
        </div>

    );
};

export default Accordion;