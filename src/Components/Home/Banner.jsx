

const Banner = () => {
    return (

        <div  data-aos="fade-right" className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/vzLmR1M/4951751-31048.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold"> Marriage Management <span className=" text-6xl text-green-500" > Love </span> </h1>
                    <p className="mb-5 text-3xl font-bold"> Contact Us For Any Wedding Management <span className=" text-green-500 text-5xl" > Our Services</span> </p>
                     <p className=" list-none text-xl" > 
                         <li>Venue Rental</li>
                         <li>Catering</li>
                         <li> Decoration and Floral Services</li>
                         <li>Event Planning and Coordination</li>
                         <li>PhotoGraphy and VideoGraphy</li>
                         <li>  Accommodation</li>
                        
                         </p>
                </div>
            </div>
        </div>


    );
};

export default Banner;