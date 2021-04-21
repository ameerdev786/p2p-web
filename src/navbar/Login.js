import React from 'react';
import {Link,} from "react-router-dom";
import {BrowserRouter as Router ,Route} from "react-router-dom";

function Login() {
    return (
          
        <div className=" font-sans min-h-screen flex items-center justify-center mt-14" >
            <div className="w-1/3 text-skin-default   mb-20 ml-10 rounded px-7 py-10 ">
                <h2 className="text-2xl text-center mb-3">Log in</h2>
                <p className="text-xl  mb-2 text-center">please check that you are visiting the correct url</p>
                <p className="border link mb-6 border-gray-200 rounded-xl text-center py-2 w-60 m-auto "><span className="text-green-400">https//:</span>accounts.binance.com</p>
                <form className="mt-6 space-y-8">
                    <div className="">
                        <label className="  block mb-2">Email</label>
                        <input className=" hover:border-yellow-400  rounded w-full border border-gray-200" type="email" required/>
                    </div>
                    <div className="">
                        <label className="text-gray-500 block mb-2">Password</label>
                        <input className=" hover:border-yellow-500 outline-none rounded w-full border border-gray-200" type="password" required/>
                    </div>
                    <div className="">
                       <button className=" btn w-full outline-none border-none  " type="submit">log in</button>
                    </div>
                </form>
                <div className="flex mt-8 capitalize   w-full space-x-4">
                  <Link ><p className=" underline text-gray-500"> forget password</p></Link>
                  <Link ><p className="hover:underline  flex-end">scan to ligin</p></Link>
                  <Link ><p className="hover:underline ">free registration</p></Link>

                </div>
                <p className="text-grey-200 text-center tip   ">@ 2017 - 2021 binance.com.all rights reserved</p>
            </div>

        </div>
 
    )
}

export default Login;
