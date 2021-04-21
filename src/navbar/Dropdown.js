import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiCaretDown } from "react-icons/bi";
import { DiFsharp } from "react-icons/di";

function Dropdown() {
  const [open, setopen] = useState(false);
  const set = () => {
    setopen(true);
  };
  const set2 = () => {
    setopen(false);
  };
  return (
    <div className="absolute top-1 left-96 ">
      <button
        onMouseEnter={set}
        className="W-12 mt-4 h-6 text-white hover:text-yellow-400 flex text-center border-none  items-center "
      >
        Trade
        <BiCaretDown />
      </button>
      <div
        onMouseLeave={set2}
        onClick={set2}
        className={`${
          open ? "block" : "hidden"
        } space-y-4 mt-5 bg-gray-900  flex w-60 h-auto z-50 relative  flex-col rounded`}
      >
        <div className="  w-full mt-1 hover:bg-gray-600   ">
          <Link>
            <h4 className=" text-xm flex  hover:text-yellow-400  text-white  items-center justify-between w-16  ml-3 mt-2   flex  capitalize">
              <span className="text-yellow-300 pr-2 ">
                <DiFsharp className="text-sm" />
              </span>
              convert
            </h4>
          </Link>
          <p className="text-xs mb-1 font-bold text-gray-500  ml-9">
            Bank transfer and trade
          </p>
        </div>
        <div className=" mt-1 mt-1 hover:bg-gray-600   hover:text-red-700">
          <Link>
            <h4 className=" text-xm flex  hover:text-yellow-400 text-white  items-center justify-between w-16  ml-3 mt-2   flex  capitalize">
              <span className="text-yellow-300 ">
                <DiFsharp className="text-sm" />
              </span>
              classic
            </h4>
          </Link>
          <p className="text-xs mb-1 font-bold text-gray-500  ml-9">
            Bank transfer and trade
          </p>
        </div>
        <div className=" mt-1 mt-1 hover:bg-gray-600   hover:text-red-700">
          <Link>
            <h4 className=" text-xm flex  hover:text-yellow-400 text-white  items-center justify-between w-20  ml-3 mt-2   flex  capitalize">
              <span className="text-yellow-300 ">
                <DiFsharp className="text-sm" />
              </span>
              advanced
            </h4>
          </Link>
          <p className="text-xs mb-1 font-bold text-gray-500  ml-9">
            Bank transfer and trade
          </p>
        </div>
        <div className=" mt-1 mt-1 hover:bg-gray-600   hover:text-red-700">
          <Link>
            <h4 className=" text-xm flex  hover:text-yellow-400 text-white  items-center justify-between w-16  ml-3 mt-2   flex  capitalize">
              <span className="text-yellow-300 ">
                <DiFsharp className="text-sm" />
              </span>
              margin
            </h4>
          </Link>
          <p className="text-xs mb-1 font-bold text-gray-500  ml-9">
            Bank transfer and trade
          </p>
        </div>
        <div className=" mt-1 mt-1 hover:bg-gray-600   hover:text-red-700">
          <Link to={"/p2p"}>
            <h4 className=" text-xm flex  hover:text-yellow-400 text-white  items-center justify-between w-12  ml-3 mt-2   flex  capitalize">
              <span className="text-yellow-300 ">
                <DiFsharp className="text-sm" />
              </span>
              p2p
            </h4>
          </Link>
          <p className="text-xs mb-1 font-bold text-gray-500  ml-9">
            Bank transfer and trade
          </p>
        </div>
        <div className=" mt-1 mt-1 hover:bg-gray-600   hover:text-red-700">
          <Link>
            <h4 className="text-xm flex  hover:text-yellow-400 text-white  items-center justify-between w-14  ml-3 mt-2   flex  capitalize">
              <span className="text-yellow-300 ">
                <DiFsharp className="text-sm" />
              </span>
              stock
            </h4>
          </Link>
          <p className="text-xs mb-1 font-bold text-gray-500  ml-9">
            Bank transfer and trade
          </p>
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
