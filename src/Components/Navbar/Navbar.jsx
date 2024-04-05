import { useContext} from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";
import Swal from "sweetalert2";






const Navbar = () => {
   


  

    const { user, logOut } = useContext(AuthContext)
    const handleSingOut = () => {
        logOut()
            .then(result => {
                console.log(result)
                Swal.fire('LogOut Successfully')
            })
            .catch()
    }

    const links = <>

        <li>

            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "  text-red-600 underline" : ""
                }
            >
                <span className=" text-2xl" >Home</span>
            </NavLink>

        </li>



        <li>

            <NavLink
                to="/about"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? " text-red-600 underline" : ""
                }
            >
                <span className=" text-2xl" > About Us</span>
            </NavLink>

        </li>



        <li>

            <NavLink
                to="/blog"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "  text-red-600 underline" : ""
                }
            >
                <span className=" text-2xl" >Blog</span>
            </NavLink>

        </li>



        <li>

            <NavLink
                to="/service"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "  text-red-600 underline" : ""
                }
            >
                <span className=" text-2xl" > Service Price </span>
            </NavLink>

        </li>


        <li>

            <NavLink
                to="/contact"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "  text-red-600 underline" : ""
                }
            >
                <span className=" text-2xl" > Contact Us </span>
            </NavLink>

        </li>


     


    </>



    return (

        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            links
                        }
                    </ul>
                </div>
                <img className=" w-32 h-32" src="https://i.ibb.co/6R4sfpq/4458381-74.jpg" alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        links
                    }
                </ul>
            </div>

            <div className=" navbar-end" >
              
            {
           user ? (<div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className=" w-14 border-4 border-red-500 rounded-full">
                    <img className=" w-full h-full " src={user?.photoURL} />
                  </div>
                </label>
                <ul tabIndex={0} className="menu menu-sm bg-green-400 dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-60">
                  <li>
                    <a className="justify-between">
                      Profile
                      <span> <img className=" w-7 h-7 rounded-full" src={user?.photoURL} alt="" /> </span>
                    </a>
                    <p className=" text-xl p-3 " > {user?.displayName} </p>
                    <p className=" -ml-2  p-3 " > {user?.email} </p>
                   
                  </li>
                  <button onClick={ handleSingOut} className=" btn btn-secondary mr-4 " > Sign Out </button>
             
                </ul>
              </div>)
               : (<Link to='/login' > <button className=" btn btn-secondary mr-4 " > Login </button> </Link>)
                   
            }

                


            </div>




        </div>



    );
};

export default Navbar;