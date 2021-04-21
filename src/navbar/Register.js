import React ,{useState}from 'react';
import {Link} from "react-router-dom";


function Register() {
    
    return (
            
        <div className=" font-sans mt-6 min-h-screen flex flex-col items-center justify-center  " >
            <div className="w-1/3  mb-20 ml-6 rounded px-7 py-10 card">
                <h2 className="text-2xl text-center  mb-3">Create a free account</h2>
                <p className="text-xl  mb-2 text-center">welcome to binance</p>
             
                <form className="mt-6 space-y-8">
                    <div className="">
                     
                        <div className="flex ">
                        <label onClick={()=>{}} className=" text-base border-b-2  block mb-2">Email</label>
                        <label className=" text-base  ml-4  capitalize block mb-2">mobile</label>

                        </div>
                        <input className="  rounded w-full border border-gray-200" type="email" required/>
                    </div>
                    <div className="">
                        <label className=" block mb-2">Password</label>
                        <input className="  outline-none rounded w-full " type="password" required/>
                    </div>
                    <p className=" ref "> Referal id(optional)</p>
                    <div className="flex mt-3  ">
                 
                     <input type="checkbox" className="  w-6" />
                     <p className="light">i have read and agree to the terms of services.<span className=" ml-2 ">binance</span></p>
                  </div>
                    <div className="">
                       <button className="  w-full   bg-skin-primary" type="submit">    Create account</button>
                    </div>
                </form>
                <p className="text-center re capitalize mt-4 ">already registered? <span className="">Log In </span> </p>
                <p className=" text-center tip   ">@ 2017 - 2021 binance.com.all rights reserved</p>
              
            </div>
    


        </div>
    )
}

export default Register;
