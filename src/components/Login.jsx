import { useState,useRef } from "react"
import Header from "./Header"
import { Validation } from "../utils/Validation";
import { Link } from "react-router-dom";

const Login = () => {

  const [signup,setSignup]= useState(true);
  const [errormessage,setErrormessage]=useState(null)

  const email = useRef(null);
  const password = useRef(null)

  const handleClick = ()=>{
    const message=Validation(email.current.value,password.current.value)
    setErrormessage(message)
    
  }

  const changestatesignup = ()=>{
    setSignup(!signup);
  };


  return (
    <div>
        <Header/>
        <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/74d734ca-0eab-4cd9-871f-bca01823d872/web/IN-en-20241021-TRIFECTA-perspective_2277eb50-9da3-4fdf-adbe-74db0e9ee2cf_small.jpg" 
        alt="Bg_img"/>
        </div>
          <form onSubmit={(e)=>e.preventDefault()} className="absolute p-8 w-3/12 my-32 m-auto left-0 right-0 bg-opacity-70 rounded-md bg-black">

            <h1 className="font-bold text-3xl text-white p-3">{signup ? "Sign In" : "Sign Up"}</h1>
            {!signup && (<input type="text" placeholder="Full Name" className="p-3 m-3 w-full rounded-md h-10 bg-opacity-50 border border-white bg-black text-white"></input>)}
            <input type="text" placeholder="Email Address" className="p-3 m-3 w-full rounded-md h-10 bg-opacity-50 border border-white bg-black text-white" ref={email}></input>
            <input type="password" placeholder="Password" className="p-3 m-3 w-full rounded-md h-10 bg-opacity-50 border border-white bg-black text-white" ref={password}></input>
            <h3 className="text-red-600 font-medium p-3">{errormessage}</h3>
            <button className="p-3 m-3 w-full h-10 font-medium text-white rounded-md bg-red-600" onClick={handleClick}>{signup ? "Sign In" : "Sign Up"}</button>
            <h2 className="font-medium text-center text-white">OR</h2>
            <button className="p-3 m-3 w-full font-medium rounded-md text-white bg-white bg-opacity-20 h-10">use a Sign-in code</button>
            <button className="font-medium m-3  text-white">Forgot Pasword?</button>
            <div className="flex p-3 m-3">
            <input type="checkbox" value="" className="m-2 h-5 w-5"/>
            <h2 className="text-white font-medium text-lg m-1">Remember me</h2>
            </div>
            <div className="flex p-3 m-3">
              <h2 className="text-white font-medium">{signup ? "New to Netflix?" : "Already a user,"}</h2>
              <Link className="text-white font-medium " onClick={changestatesignup}>{signup ? "Sign Up" : "Sign In"}</Link>
            </div>
            <div className="flex flex-wrap p-1 m-3  ">
              <h3 className=" text-sm  text-white">This page is protected by Google reCAPTCHA to ensure you're not a bot.</h3>
              <button className="text-sky-700 text-sm">Learn more.</button>
            </div>
          </form>
          <div className="bg-black w-3/12">

          </div>

    </div>
  )
}

export default Login