// import { useEffect } from "react";
import {  useLoaderData, useParams } from "react-router-dom";
import { AiFillEnvironment,AiFillDollarCircle,AiFillPhone,AiTwotoneMail} from "react-icons/ai";


const EventDetails = () => {
     
  const eventCards = useLoaderData();
  console.log(eventCards)
    const  {id} = useParams()
    const idInd = parseInt(id)
    const  eventCard = eventCards.find(eventCard => eventCard.id === idInd)
    const {logo,event_title,event_description,image_url,title_name,location,price,phone,email} = eventCard
   

    // useEffect(()=>{
    //     fetch('marry.json')
    // },[])  

    

   
   
    return (
        <div>
            <h2 className=" text-5xl text-center font-bold" >Wedding Management Service Details</h2>
            <div className="hero min-h-screen ">
  <div className="hero-content flex-col lg:flex-row">
    <img  src={logo} className=" rounded-lg w-[2500px] h-[400px] shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold"> {event_title} </h1>
      <p className="py-6"> {event_description} </p>
       <div className=" flex gap-3 items-center" >
        <img className=" w-20 h-20 rounded-full" src={image_url} alt="" />
       <p className=" font-bold text-xl" > {title_name} </p>
       </div>
     
       <div className=" flex gap-3" >
        <p className=" flex gap-1 items-center font-bold text-xl" > <AiFillEnvironment></AiFillEnvironment> {location} </p>
        <p className="flex gap-1 items-center font-bold text-xl" > <AiFillDollarCircle></AiFillDollarCircle> {price} </p>
       </div>

       <div className=" flex gap-3" >
        <p className="flex gap-1 items-center font-bold text-xl" > <AiFillPhone></AiFillPhone>  {phone} </p>
        <p className="flex gap-1 items-center font-bold text-xl" > <AiTwotoneMail></AiTwotoneMail> {email} </p>
       </div>
      
    </div> 
  </div>
</div>
            
        </div>
    );
};

export default EventDetails;