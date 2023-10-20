import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Link } from 'react-router-dom';

const Register = () => {
    const { dark , setDark , In, update , Google , OUT ,  creatUser} = useContext(AuthContext)

    const handleRegister = e =>{
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        const photoUrl = form.photoUrl.value
        creatUser(email,password)
        .then(res => {
            console.log(res.user)
        })
        .catch(err=>{
            console.log(err)
        })

    }

    const handleGoogle =()=>{
        Google()
        .then(res => {
            console.log(res.user)
        })
        .catch(err => {
            console.log(err)
        })
    }
    return (
        <div className="flex flex-col items-center justify-center h-screen dark">
  <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-md p-6">
    <h2 className="text-2xl font-bold text-gray-200 mb-4">Register</h2>
    <form onSubmit={handleRegister} className="flex flex-col">
      <input name='name' placeholder="UserName" className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="text" />
      <input name='email' placeholder="Email address" className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="email" />
      <input name='password' placeholder="Password" className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="password" />
      <input name='photoUrl' placeholder="Photo Url" className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="text" />
      <div className="flex items-center justify-between flex-wrap">
        {/* <label className="text-sm text-gray-200 cursor-pointer" htmlFor="remember-me">
          <input className="mr-2" id="remember-me" type="checkbox" />
          Remember me
        </label> */}
        {/* <a className="text-sm text-blue-500 hover:underline mb-0.5" href="#">Forgot password?</a> */}
        <p className="text-white mt-4"> Already have account ? <Link className="text-sm text-blue-500 -200 hover:underline mt-4" to={'/Login'}>SignIn</Link></p>
      </div>
      <button className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150" type="submit">Register</button>
     
    </form>
    <button onClick={handleGoogle} className=" bg-white w-full text-black font-bold py-2 flex items-center justify-center gap-3 px-4 rounded-md mt-4"> <img className='w-[40px]' src="/continureGoogle.png" alt="" />Continue With Google</button>
  </div>
</div>

    );
};

export default Register;