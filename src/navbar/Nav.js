import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="nav w-full  flex    h-16">
      <img
        className="ml-10 h-12 w-24 mt-2"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6UGtZ5DfvMSjl1D2jXddP22Ft4f_qKsOzE6BE8nt07EZgK6GssZHWsazRAFZls7lSKOI&usqp=CAU"
        alt=""
      />
      <Link to="/login">
        {" "}
        <h1 className=" text-lg font-normal mt-4 first text-white">
          Login
        </h1>{" "}
      </Link>
      <Link to="/register">
        {" "}
        <h1 className=" rounded second mt-4 bg-skin-accent px-3 py-2">
          register
        </h1>{" "}
      </Link>
    </div>
  );
}

export default Nav;
