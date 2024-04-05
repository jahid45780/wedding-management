

const ExtraSections = () => {
    return (
        <div>
            <h2 className=" text-center text-5xl font-bold  mt-4 mb-4" > Some Of Our Best Management Programs </h2>
            {/* sections 1 */}
            <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/M84C6rh/guy-black-suit-male-restaurant.jpg" className="w-full h-full "  />
    
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/hc45YgC/young-couple-event-manager-discussing-plan.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/ZKfxm1H/female-wedding-planner-working-with-bride-groom.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/K9z3g8K/female-wedding-planner-working-ceremony.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>



             {/* sections 2 */}
    
             <h2 className=" text-center text-5xl font-bold  mt-4 mb-4" > Marriage Management Official </h2>

             <div>
  <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 items-center justify-center">
    <img  src="https://i.ibb.co/m938vqw/customers-and-event-planners-discussing-at-office-2-FXC243.jpg" className="rounded-lg shadow-2xl" />
    <div className="" >
      <h1 className="text-5xl font-bold">Contact For All Types Of Wedding Management Services</h1>
      <p className="py-6 text-xl ">Award winning BD Event Management & Wedding Planners offer a highly creative ,

friendly & Professional service to Bangladesh .  
</p>
     <button className="  btn-info p-3 w-full shadow-lg  rounded-lg text-4xl" > You Can Directly Contact Our Office </button>
    </div>
  </div>
</div>

 
   
        </div>
    );
};

export default ExtraSections;