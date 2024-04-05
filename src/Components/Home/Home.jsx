import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import EventCard from "../EventCard/EventCard";
import ExtraSections from "../ExtraSections/ExtraSections";
// import TsParticles from "../TsParticles/TsParticles";








const Home = () => {
    const cards = useLoaderData()
    console.log(cards)
    return (
        <div className=" m-4">

           

            <Banner></Banner> 
            <h2 className=" font-bold text-6xl text-center my-4" > Our Services </h2>
           <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 shadow-lg" >

           {
                cards.map(card => <EventCard
                key={card.id} card={card}
                ></EventCard>)
            }


           </div>

           <ExtraSections></ExtraSections>
    
           
        </div>
    );
};

export default Home;