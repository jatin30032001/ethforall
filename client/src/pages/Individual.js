import React, { useState } from "react";
import {
  BsCheck2Circle,
  BsHeartFill,
  BsHeart,  
  BsGlobe,
  BsTwitter,
  BsLinkedin,
  BsInstagram,
  BsFillTelephoneFill,
} from "react-icons/bs";
import { RxCrossCircled} from 'react-icons/rx';
import { BiCopy } from "react-icons/bi";
import Map from "../components/Map";
import { FiMail } from "react-icons/fi";
const Individual = () => {
  const [name, setName] = useState("John Parington");
  const [director, setDirector] = useState('');
  const [contact, setContact] = useState("9898989898");
  const [instagram, setInstagram] = useState("link");
  const [twitter, setTwitter] = useState("link");
  const [prsnl, setPrsnl] = useState("link");
  const [mail, setMail] = useState("link");
  const [linkedIn, setLinkedIn] = useState("link");

  const [kyc, setKyc] = useState(false);
  const [affiliation, setAffiliation] = useState(0);
  const [wallet, setWallet] = useState(
    "0x1d595281352F8897cd2Cf2ca454c91871593EfA1"
  );

  const [seeks, setSeeks] = useState(1000);
  const [endorses, setEndorses] = useState(11);
  const [endorsed, setEndorsed] = useState(true);
  const [received, setReceived] = useState(200);
  const percent = (received / seeks) * 100;
  return (
    <div>
      <div
        className="flex h-screen max-w-full bg-gray-800 "
        x-data="{openMenu:1}"
      >
        {/* <!--Start SideBar--> */}
        <div className="w-20 relative z-20 flex-shrink-0  px-2 overflow-y-auto bg-indigo-600 sm:block">
          <div className="mb-6">
            {/* <!--Start logo --> */}
            <div className="flex justify-center">
              <div className="w-14 h-14 rounded-full bg-gray-300 border-2 border-white mt-2">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVxhAxJ4D7MOeTTj6kR9PBeZonW5HM7giKjTbEmR-HMBwf3G1VqGnlwpO1kWrdyIZu8_U&usqp=CAU"
                  className="rounded-full w-auto"
                  alt="user"
                />
              </div>
            </div>
            {/* <!--End logo --> */}
            {/* <!--Start NavItem --> */}
            <div>
              <ul className="mt-6 leading-10 px-4">
                <li
                  className="mb-3 p-2 rounded-md flex items-center justify-center bg-blue-400 cursor-pointer"
                  // @click="openMenu !== 1 ? openMenu = 1 : openMenu = null"
                >
                  <i className="fas fa-align-left fa-sm text-white"></i>
                </li>
                <li className="mb-3 p-2 rounded-md flex items-center justify-center bg-pink-400 cursor-pointer">
                  <i className="fas fa-question-circle fa-sm text-white"></i>
                </li>
                <li className="mb-3 p-2 rounded-md flex items-center justify-center bg-yellow-400 cursor-pointer">
                  <i className="fas fa-headphones fa-sm text-white"></i>
                </li>
                <li className="absolute bottom-0 mb-3 p-2 rounded-full flex items-center mx-auto bg-white cursor-pointer">
                  <i className="fas fa-power-off fa-sm text-indigo-600"></i>
                </li>
              </ul>
            </div>
            {/* <!--End NavItem --> */}
          </div>
        </div>
        {/* <!-- Start Open Menu --> */}
        <div
          className=" w-52 relative z-0 flex-shrink-0 hidden px-4 overflow-y-auto bg-gray-100 sm:block "
          x-show="openMenu ==  1"
          //    @click.away="openMenu = null"
        >
          <div className="mb-6">
            {/* <!--Start Sidebar for open menu --> */}
            <div className="grid gap-4 grid-cols-2 mt-6">
              {/* <!-- Start Navitem --> */}
              <div
                title={kyc ? "Verified" : "Unverified"}
                className="p-2 flex flex-col items-center bg-white rounded-md justify-center shadow-xl cursor-pointer"
              >
                <div
                  className={
                    "rounded-full p-1 flex flex-col items-center " +
                    (kyc ? "bg-green-400" : "bg-red-400")
                  }
                >
                  <i className=""></i>
                </div>
                <p className="text-xs mt-1 text-center font-semibold">KYC</p>
              </div>
              <div
                title={wallet ? "Wallet Connected" : "No Wallet"}
                className="p-2 flex flex-col items-center bg-white rounded-md justify-center shadow-xl cursor-pointer"
              >
                <div
                  className={
                    "rounded-full p-1 flex flex-col items-center " +
                    (wallet ? "bg-green-400" : "bg-red-400")
                  }
                >
                  <i className=""></i>
                </div>
                <p className="text-xs mt-1 text-center font-semibold">Wallet</p>
              </div>
              <div className="p-2 flex flex-col items-center bg-white rounded-md justify-center shadow-xl cursor-pointer">
                <div
                  className={
                    "rounded-full p-1 flex flex-col items-center bg-yellow-400"
                  }
                >
                  <i className=""></i>
                </div>
                <p className="text-xs mt-1 text-center font-semibold">
                  {affiliation?'Agency':'Individual'}
                </p>
              </div>
              <div className="p-2 flex flex-col items-center bg-white rounded-md justify-center shadow-xl cursor-pointer">
                <div
                  className={
                    "rounded-full p-1 flex flex-col items-center bg-slate-400"
                  }
                >
                  <i className=""></i>
                </div>
                <p className="text-xs mt-1 text-center font-semibold">
                  Recepient
                </p>
              </div>
              {/* <!-- End Navitem --> */}
            </div>
            {/* <!--End Sidebar for open menu --> */}
          </div>
        </div>
        {/* <!-- End Open Menu --> */}

        {/* <!-- End Sidebar --> */}
        <div className="flex flex-col flex-1 overflow-y-auto">
          {/* <!--Start Topbar --> */}
          {/* <!--End Topbar --> */}
          <main className="relative z-0 flex-1 pb-8 px-6 bg-white">
            <div className="grid pb-8  mt-4 ">
              {/* <!-- Start Content--> */}
              <div className="mb-1 p-4 ">
                <p className="text-2xl flex font-bold text-black pb-0">
                  {name}{" "}
                  <span
                    onClick={() => setEndorsed(!endorsed)}
                    className="my-auto ml-3"
                  >
                    {endorsed ? (
                      <BsHeartFill
                        onClick={() => setEndorses(endorses - 1)}
                        title="Unendorse"
                        className={
                          "cursor-pointer text-base my-auto text-red-600"
                        }
                      />
                    ) : (
                      <BsHeart
                        onClick={() => setEndorses(endorses + 1)}
                        title="Endorse"
                        className={"cursor-pointer text-base my-auto"}
                      />
                    )}
                  </span>
                  <span className="text-base font-normal my-auto ml-2">
                    {endorses}
                  </span>
                </p>
                <div className="flex mt-3 space-x-4">
                  {contact ? (
                    <div
                      onClick={() => {
                        navigator.clipboard.writeText(contact);
                      }}
                      className="my-auto w-fit "
                    >
                      <BsFillTelephoneFill className="text-green-500" />
                    </div>
                  ) : (
                    <></>
                  )}
                  {linkedIn ? (
                    <a className="my-auto" href={linkedIn}>
                      <BsLinkedin className="text-blue-500" />
                    </a>
                  ) : (
                    <></>
                  )}
                  {twitter ? (
                    <a className="my-auto" href={twitter}>
                      <BsTwitter className="text-blue-500" />
                    </a>
                  ) : (
                    <></>
                  )}
                  {prsnl ? (
                    <a className="my-auto" href={prsnl}>
                      <BsGlobe className="text-blue-500" />
                    </a>
                  ) : (
                    <></>
                  )}
                  {instagram ? (
                    <a className="my-auto" href={instagram}>
                      <BsInstagram className="text-pink-500 font-bold" />
                    </a>
                  ) : (
                    <></>
                  )}
                  {mail ? (
                    <a className="my-auto" href={instagram}>
                      <FiMail className="text-pink-500 font-bold" />
                    </a>
                  ) : (
                    <></>
                  )}
                  {kyc ? (
                    <div className="text-green-400 flex">
                      Verified User{" "}
                      <BsCheck2Circle className="my-auto ml-2 text-green-400" />
                    </div>
                  ) : (
                    <div className="text-red-400 flex">
                      Unverified User{" "}
                      <RxCrossCircled className="my-auto ml-2 " />
                    </div>
                  )}
                </div>
                {wallet ? (
                  <div className="flex justify-start items-center mt-3">
                    <span className="font-semibold mr-2">Ethereum Wallet:</span>{" "}
                    <span
                      onClick={() => {
                        navigator.clipboard.writeText(wallet);
                      }}
                      className="flex cursor-pointer hover:text-gray-700"
                    >
                      {wallet.substring(0, 5).toLowerCase() +
                        "..." +
                        wallet.substring(38).toLowerCase()}
                      <BiCopy className="my-auto ml-2" />
                    </span>
                  </div>
                ) : (
                  <></>
                )}
              </div>
              <div className="grid grid-cols-12 gap-6 border-b-2 pb-5">
                <div className="col-span-12 sm:col-span-12 md:col-span-6">
                  <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 mt-3">
                    <div className="p-4 flex gap-2 justify-center items-center">
                      <p className="text-lg font-bold pb-0">Age</p>
                      <p className="text-xs font-semibold pb-0 text-gray-400">
                        20
                      </p>
                    </div>
                    <div className="p-4 flex gap-2 justify-center items-center">
                      <p className="text-lg font-bold">Needs</p>
                      <p className="text-xs font-semibold text-gray-400">
                        <span>$ </span>
                        {seeks}
                      </p>
                    </div>
                    <div className="p-4 flex">
                      <div className="w-full">
                        <p
                          className="text-sm text-gray-400"
                          style={{ marginLeft: `${percent - 5}%` }}
                        >
                          {percent}%
                        </p>
                        <div className="shadow w-full bg-gray-100 mt-2">
                          <div className="rounded leading-none h-3 flex text-center w-full text-white overflow-hidden">
                            <div
                              className={` rounded-l bg-green-400 h-full`}
                              style={{ width: `${percent}%` }}
                            ></div>
                            <div
                              className={` rounded-r bg-red-400 h-full`}
                              style={{ width: `${100 - percent}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                      {/* <BsCashCoin className="ml-1 w-16 h-8 my-auto text-yellow-400 " /> */}
                      {/* <p className="text-xs font-semibold text-gray-400 mt-2"></p> */}
                    </div>
                  </div>
                </div>
                <div className="col-span-12 sm:col-span-12 md:col-span-4 lg:col-span-4 xxl:col-span-4"></div>
              </div>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-1 md:grid-cols-3 mt-3">
                <div className="relative w-full h-52 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg cursor-pointer hover:shadow-gray-500">
                  <div className="absolute inset-0 bg-pink-900 bg-opacity-75 transition duration-300 ease-in-out"></div>
                  <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex items-center justify-center">
                    <div>
                      <h3 className="text-center text-white font-semibold text-xl">
                        {"Personal Story"}
                      </h3>
                      <h3 className="text-center text-white text-lg mt-2 font-semibold">
                        (Proof of Need)
                      </h3>
                      <div className="flex space-x-4 mt-4"></div>
                    </div>
                  </div>
                </div>
                <div className="relative w-full h-52 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg transition duration-300 ease-in-out">
                  {/* <div className="absolute inset-0 bg-blue-900 bg-opacity-75 transition duration-300 ease-in-out"></div> */}
                  {/* <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex items-center"> */}
                  <div className="w-full h-full">
                    <Map
                      className="w-96 h-96"
                      location={[22.3850051, 71.745261]}
                      user={name}
                    />
                  </div>
                </div>
                {/* <div className="relative w-full h-52 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg transition duration-300 ease-in-out">
                  <div className="absolute inset-0 bg-yellow-600 bg-opacity-75 transition duration-300 ease-in-out"></div>
                  <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex items-center">
                    <div>
                      <div className="text-white text-lg flex space-x-2 items-center">
                        <div className="bg-white rounded-md p-2 flex items-center">
                          <i className="fas fa-toggle-off fa-sm text-yellow-300"></i>
                        </div>
                        <p>Donation History</p>
                      </div>
                      <h3 className="text-white text-3xl mt-2 font-bold">H</h3>
                      <h3 className="text-lg mt-2 text-yellow-100 ">Hi</h3>
                    </div>
                  </div>
                </div> */}
              </div>

              {/* <!-- End Content--> */}
            </div>
          </main>
        </div>
      </div>
      {/* </body> */}
    </div>
  );
};

export default Individual;
