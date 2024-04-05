import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";



const Register = () => {

  


    const {createUser} = useContext(AuthContext)

    const handleRegister = e=>{
        e.preventDefault()
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget)
        const name = form.get('name')
        const email = form.get('email')
        const password = form.get('password')
        console.log(email, password,name)


        if(password.length < 6  ){
            Swal.fire('Password must be more than 6 digits')
            return;
        }

        else if (!/[A-Z]/.test(password)){
            Swal.fire('your password should have at least on  uppercase character')
            return;
       }
      

        // create user
        createUser(email, password)
        .then(result =>{
            console.log(result.user)
            
            Swal.fire('Account Credited Successfully')

        })
        .catch(error=>{
            console.error(error)
            
            Swal.fire(' Already have this account ')
        })
    }

    return (
        <div>
   <h2 className=" text-4xl text-center font-bold" >  Register To Your Account </h2>
<div className="flex h-screen items-center justify-center px-4 sm:px-6 lg:px-8">
    <div className="w-full max-w-md space-y-8">
        <div className="bg-white shadow-md rounded-md p-6">

           


            <form onSubmit={handleRegister} className="space-y-6" method="POST">

                <div>
                    <label  className="block text-sm font-medium text-gray-700">Name</label>
                    <div className="mt-1">
                        <input name="text" placeholder="Name" type="name" 
                            className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" />
                    </div>
                </div>

                <div>
                    <label  className="block text-sm font-medium text-gray-700">Email</label>
                    <div className="mt-1">
                        <input name="email" autoComplete="@gmail.com" placeholder="Email" type="email" required
                            className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" />
                    </div>
                </div>

                <div>
                    <label  className="block text-sm font-medium text-gray-700">Password</label>
                    <div className="mt-1">
                        <input name="password" placeholder="Password" type="password" required
                            className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" />
                    </div>
                </div>

                <div>
                    <button type="submit"
                        className="flex w-full justify-center rounded-md border border-transparent bg-sky-400 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2">Register
                        Account
                        </button>
                </div>
            </form>
           
            <p className=" text-center text-xl " > Already have an account? <Link to='/login' > <button className=" btn shadow-md font-bold mt-4 text-green-900 text-xl" > Login </button> </Link> </p>
        </div>
    </div>
</div>
    
        </div>
    );
};

export default Register;