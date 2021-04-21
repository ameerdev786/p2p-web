import React from "react";
import { Link } from "react-router-dom";
import { DiDropbox } from "react-icons/di";
import { DiCloud9 } from "react-icons/di";
import { DiBrackets } from "react-icons/di";

function P2p() {
  return (
    <>
      <div
        style={{ zIndex: "10" }}
        className="absolute left-80 ml-40 text-center z-10 flex-col flex items-center content-center "
      >
        <h1 className="mt-5 mr-24 text-3xl text-white font-semibold capitalize text-2xl">
          Buy/Sale your crypto locally
        </h1>
        <h4 className="text-gray-300 mr-24 mt-2 font-semibold capitalize text-2xl ">
          Trade ith zero fees
        </h4>
        <Link className="text-underline mr-24 mt-2">Read More</Link>
      </div>
      <img
        className="w-full  h-32 object-cover"
        src="https://images.unsplash.com/photo-1504610926078-a1611febcad3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        alt=""
      />
      <div className="w-full  h-auto ">
        <div className="bg-gray-900 h-12 relative w-full">
          <h2 className=" border-b-2 text-skin-accent w-10 h-10 absolute top-1.5  font-bold ml-20">
            P2P
          </h2>
        </div>

        <div className=" h-16 relative bg-skin-base shadow-lg w-full">
          <div className=" w-32  p-1 flex rounded ml-24  pt-4">
            <div className="border border-skin-base w-32 rounded mb-1 flex items-center justify-center">
              <button className="bg-skin-danger  text-skin-default h-7 ml-2 rounded  flex text-center items-center w-16">
                Buy
              </button>
              <button className=" font-semibold text-skin-danger capitalize text-2xl h-7 ml-1 flex text-center items-center w-16">
                sell
              </button>
            </div>

            <div className="flex ml-8 text-skin-danger space-x-8">
              <h2 className="border-b-2 border-skin-primary h-10 font-bold ">
                BTC{" "}
              </h2>
              <h2>BUSN </h2>
              <h2>BNB</h2>
              <h2>ETH </h2>
              <h2>DAI</h2>
            </div>
          </div>
          {/* paymount ammount nav */}
          <div className="grid grid-cols-3 relative top-3 w-96 ml-40 mt-6 text-sm text-skin-default space-x-32">
            <p>Amount</p>
            <p>Fait</p>
            <p>paymount</p>
          </div>

          <div className="grid ml-32  grid-cols-3 w-96 gap-10  p  w-40 space-x-32">
            <div className="flex items-center h-8 w-64 mt-4 ">
              <input
                type="text"
                className=" bordr-gray-200 rounded-lr-md rounded-lr-md hover:border-yellow-400 border rounded-none h-8  shadow-none "
                placeholder="Enter Amount"
              />
              <button className=" h-8 text-top flex align-center text-center justify-center rounded-none rounded-br-md rounded-tr-md   w-16  rounded text-yellow-600  hover:border-yellow-400  font-bold">
                Search
              </button>
            </div>
            <div className="h-8 ">
              <DiDropbox className=" top-6 text-1xl relative" />
              <select className="w-32 h-8 text-xl font-bold">
                <option>CNY </option>
              </select>
            </div>
            <div className="h-8  mb-4">
              <DiCloud9 className=" top-6 text-1xl relative  relative" />
              <select className="h-8 text-xl w-40  font-bold">
                <option className="">All Payments</option>
              </select>
            </div>
          </div>
          <div className="w-10/12 gap-20 space-x-12 grid grid-cols-5 ml-32 mt-6  text-xs text-bold  capitalize mt-4 h-6">
            <p>advertisers</p>
            <p>limit</p>
            <p>price</p>
            <p>rate</p>
            <p>buy</p>
          </div>
          {/* card section start from here */}
          <div className="bg-skin-base text-skin-default">
            <div className="w-10/12 mt-4 ml-32 py-3 space-x-16 border-t   grid grid-cols-5">
              <div>
                <p className="">⭐⭐九龙集团⭐安全资金⭐</p>
                <p className="">493 order in queue</p>
              </div>
              <div>
                <h1>6.71</h1>
              </div>
              <div>
                <div className="flex ">
                  <div>
                    <p className=" text-xl  text-xm">Available</p>
                    <h4 className="text-xl text-xm">limit</h4>
                  </div>
                  <div className="ml-4">
                    <p className="text-xl">75.44467 USDT</p>
                    <h3 className="flex">￥506,500.25</h3>
                  </div>
                </div>
              </div>
              <div className="flex ">
                <DiBrackets className=" text-2xl" />
                <p className="ml-2">Bank transfer</p>
              </div>
              <div>
                <button className="  rounded  px-8 py-1.5   bg-skin-danger  ">
                  Buy USDT
                </button>
              </div>
            </div>
            <div className="w-10/12 mt-4 ml-32 py-3 space-x-16 border-t   grid grid-cols-5">
              <div>
                <p>⭐⭐九龙集团⭐安全资金⭐</p>
                <p>493 order in queue</p>
              </div>
              <div>
                <h1>6.71</h1>
              </div>
              <div>
                <div className="flex ">
                  <div>
                    <p className=" text-xl text-xm">Available</p>
                    <h4 className="text-xl  text-xm">limit</h4>
                  </div>
                  <div className="ml-4">
                    <p className="text-xl">75.44467 USDT</p>
                    <h3 className="flex">￥506,500.25</h3>
                  </div>
                </div>
              </div>
              <div className="flex">
                <DiBrackets className=" text-2xl" />
                <p className="ml-2">Bank transfer</p>
              </div>
              <div>
                <button className=" rounded  px-8 py-1.5   bg-skin-danger   ">
                  Buy USDT
                </button>
              </div>
            </div>
            <div className="w-10/12 mt-4 ml-32 py-3  space-x-16 border-t   grid grid-cols-5">
              <div>
                <p>⭐⭐九龙集团⭐安全资金⭐</p>
                <p>493 order in queue</p>
              </div>
              <div>
                <h1>6.71</h1>
              </div>
              <div>
                <div className="flex ">
                  <div>
                    <p className=" text-xl  text-xm">Available</p>
                    <h4 className="text-xl  text-xm">limit</h4>
                  </div>
                  <div className="ml-4">
                    <p className="text-xl">75.44467 USDT</p>
                    <h3 className="flex">￥506,500.25</h3>
                  </div>
                </div>
              </div>
              <div className="flex">
                <DiBrackets className=" text-2xl" />
                <p className="ml-2">Bank transfer</p>
              </div>
              <div>
                <button className="  rounded  px-8 py-1.5   bg-skin-danger   ">
                  Buy USDT
                </button>
              </div>
            </div>
            <div className="w-10/12 mt-4 ml-32 py-3 space-x-16 border-t   grid grid-cols-5">
              <div>
                <p>⭐⭐九龙集团⭐安全资金⭐</p>
                <p>493 order in queue</p>
              </div>
              <div>
                <h1>6.71</h1>
              </div>
              <div>
                <div className="flex ">
                  <div>
                    <p className=" text-xl  text-xm">Available</p>
                    <h4 className="text-xl text-xm">limit</h4>
                  </div>
                  <div className="ml-4">
                    <p className="text-xl">75.44467 USDT</p>
                    <h3 className="flex">￥506,500.25</h3>
                  </div>
                </div>
              </div>
              <div className="flex">
                <DiBrackets className=" text-2xl" />
                <p className="ml-2">Bank transfer</p>
              </div>
              <div>
                <button className=" rounded  px-8 py-1.5   bg-skin-danger   bg-skin-base">
                  Buy USDT
                </button>
              </div>
            </div>
            <div className="w-10/12 mt-4 ml-32 py-3 space-x-16 border-t   grid grid-cols-5">
              <div>
                <p>⭐⭐九龙集团⭐安全资金⭐</p>
                <p>493 order in queue</p>
              </div>
              <div>
                <h1>6.71</h1>
              </div>
              <div>
                <div className="flex ">
                  <div>
                    <p className=" text-xl  text-xm">Available</p>
                    <h4 className="text-xl  text-xm">limit</h4>
                  </div>
                  <div className="ml-4">
                    <p className="text-xl">75.44467 USDT</p>
                    <h3 className="flex">￥506,500.25</h3>
                  </div>
                </div>
              </div>
              <div className="flex">
                <DiBrackets className=" text-2xl" />
                <p className="ml-2">Bank transfer</p>
              </div>
              <div>
                <button className="rounded  px-8 py-1.5   bg-skin-danger   bg-skin-base">
                  Buy USDT
                </button>
              </div>
            </div>
            <div className="w-10/12 mt-4 ml-32 py-3 space-x-16 border-t   grid grid-cols-5">
              <div>
                <p>⭐⭐九龙集团⭐安全资金⭐</p>
                <p>493 order in queue</p>
              </div>
              <div>
                <h1>6.71</h1>
              </div>
              <div>
                <div className="flex ">
                  <div>
                    <p className=" text-xl  text-xm">Available</p>
                    <h4 className="text-xl  text-xm">limit</h4>
                  </div>
                  <div className="ml-4">
                    <p className="text-xl">75.44467 USDT</p>
                    <h3 className="flex">￥506,500.25</h3>
                  </div>
                </div>
              </div>
              <div className="flex">
                <DiBrackets className=" text-2xl" />
                <p className="ml-2">Bank transfer</p>
              </div>
              <div>
                <button className="rounded  px-8 py-1.5   bg-skin-danger   bg-skin-base">
                  Buy USDT
                </button>
              </div>
            </div>
            <div className="w-10/12 mt-4 ml-32 py-3 space-x-16 border-t   grid grid-cols-5">
              <div>
                <p>⭐⭐九龙集团⭐安全资金⭐</p>
                <p>493 order in queue</p>
              </div>
              <div>
                <h1>6.71</h1>
              </div>
              <div>
                <div className="flex ">
                  <div>
                    <p className=" text-xl  text-xm">Available</p>
                    <h4 className="text-xl  text-xm">limit</h4>
                  </div>
                  <div className="ml-4">
                    <p className="text-xl">75.44467 USDT</p>
                    <h3 className="flex">￥506,500.25</h3>
                  </div>
                </div>
              </div>
              <div className="flex">
                <DiBrackets className=" text-2xl" />
                <p className="ml-2">Bank transfer</p>
              </div>
              <div>
                <button className=" rounded  px-8 py-1.5   bg-skin-danger   bg-skin-base">
                  Buy USDT
                </button>
              </div>
            </div>
            <div className="w-10/12 mt-4 ml-32 py-3 space-x-16 border-t   grid grid-cols-5">
              <div>
                <p>⭐⭐九龙集团⭐安全资金⭐</p>
                <p>493 order in queue</p>
              </div>
              <div>
                <h1>6.71</h1>
              </div>
              <div>
                <div className="flex ">
                  <div>
                    <p className=" text-xl  text-xm">Available</p>
                    <h4 className="text-xl  text-xm">limit</h4>
                  </div>
                  <div className="ml-4">
                    <p className="text-xl">75.44467 USDT</p>
                    <h3 className="flex">￥506,500.25</h3>
                  </div>
                </div>
              </div>
              <div className="flex">
                <DiBrackets className=" text-2xl" />
                <p className="ml-2">Bank transfer</p>
              </div>
              <div>
                <button className=" rounded  px-8 py-1.5   bg-skin-danger   bg-skin-base">
                  Buy USDT
                </button>
              </div>
            </div>
            <div className="w-10/12 mt-4 ml-32 py-3 space-x-16 border-t   grid grid-cols-5">
              <div>
                <p>⭐⭐九龙集团⭐安全资金⭐</p>
                <p>493 order in queue</p>
              </div>
              <div>
                <h1>6.71</h1>
              </div>
              <div>
                <div className="flex ">
                  <div>
                    <p className=" text-xl text-xm">Available</p>
                    <h4 className="text-xl  text-xm">limit</h4>
                  </div>
                  <div className="ml-4">
                    <p className="text-xl">75.44467 USDT</p>
                    <h3 className="flex">￥506,500.25</h3>
                  </div>
                </div>
              </div>
              <div className="flex">
                <DiBrackets className="text-2xl" />
                <p className="ml-2">Bank transfer</p>
              </div>
              <div>
                <button className=" rounded  px-8 py-1.5   bg-skin-danger   bg-skin-base">
                  Buy USDT
                </button>
              </div>
            </div>
          </div>

          {/* card for website */}
          <div className="w-full bg-skin-base mt-12 h-auto">
            <h1 className="pt-10  text-skin-default capitalize ml-12  font-bold text-4xl">
              advantages of p2p exchange
            </h1>
            <div className=" text-skin-default pb-12 w-10/12 flex ml-32 mt-10 space-x-10 ">
              <div>
                <img
                  className=""
                  src="https://bin.bnbstatic.com/static/images/c2c/user/seo/seo-advantage1.png"
                />
                <h2 className="font-semibold capitalize text-2xl capitalize">
                  Low cost transaction fees
                </h2>
                <p>
                  As P2P exchange is a simple platform, the overhead costs are
                  negligible for buyers and sellers.
                  <br />
                  On Binance P2P, you are charged zero trading fees. We do not
                  take any fees from peer-to-peer fiat-crypto transactions or
                  offers posted on our platform.
                </p>
              </div>
              <div>
                <img src="https://bin.bnbstatic.com/static/images/c2c/user/seo/seo-advantage1.png" />
                <h2 className="font-semibold capitalize text-2xl capitalize">
                  Flexible payment methods
                </h2>
                <p>
                  As P2P exchange is a simple platform, the overhead costs are
                  negligible for buyers and sellers.
                  <br />
                  On Binance P2P, you are charged zero trading fees. We do not
                  take any fees from peer-to-peer fiat-crypto transactions or
                  offers posted on our platform.
                </p>
              </div>
              <div>
                <img
                  className=""
                  src="https://bin.bnbstatic.com/static/images/c2c/user/seo/seo-advantage1.png"
                />
                <h2 className="font-semibold capitalize text-2xl capitalize">
                  Trade at your preferred prices
                </h2>
                <p>
                  As P2P exchange is a simple platform, the overhead costs are
                  negligible for buyers and sellers.
                  <br />
                  On Binance P2P, you are charged zero trading fees. We do not
                  take any fees from peer-to-peer fiat-crypto transactions or
                  offers posted on our platform.
                </p>
              </div>
              <div>
                <img src="https://bin.bnbstatic.com/static/images/c2c/user/seo/seo-advantage1.png" />
                <h2 className="font-semibold capitalize text-2xl capitalize">
                  Protection for your privacy
                </h2>
                <p>
                  As P2P exchange is a simple platform, the overhead costs are
                  negligible for buyers and sellers.
                  <br />
                  On Binance P2P, you are charged zero trading fees. We do not
                  take any fees from peer-to-peer fiat-crypto transactions or
                  offers posted on our platform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default P2p;
