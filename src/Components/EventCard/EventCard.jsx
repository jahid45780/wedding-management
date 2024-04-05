import { Link } from "react-router-dom";
import { AiFillDollarCircle } from "react-icons/ai";

const EventCard = ({ card }) => {
    const { id,logo, event_title, price, location, event_description } = card;
    return (
        <div  data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500">

            <img className=" w-96 h-72" src={logo} alt="" />
            <h2 className=" text-2xl font-bold" > {event_title} </h2>
            <div className=" flex gap-24 text-xl" >
                <p  >   {location} </p>
                <p className=" flex gap-1 mr-1 items-center " > <AiFillDollarCircle className=" text-xl" ></AiFillDollarCircle> {price} </p>
            </div>
            <p> {event_description} </p>

            <div className=" text-center mt-3" >
            <Link to={`/marry/${id}`} >
            
            <button className="btn" >  Details  Service  </button>
            
            </Link>

            </div>
        </div>
    );
};

export default EventCard;