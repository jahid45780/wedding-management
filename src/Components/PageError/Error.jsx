import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
   
    <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/MGnH4WH/images.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">OOPS!! sorry</h1>
      <p className="mb-5 text-4xl font-bold "> Try again correctly </p>
      <Link to='/' > <button className=" btn" >Go Back Home</button> </Link>
     
    </div>
  </div>
</div> 






      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}