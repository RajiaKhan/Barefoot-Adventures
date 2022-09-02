import React, { useState } from "react";
import Image from "next/image";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
const Index = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <div className="justify-center container mx-auto">
        <div className="  ">
          <div className="flex flex-wrap justify-between items-center px-20]">
            <Image
              className="cursor-pointer"
              src="/Hourglass.svg"
              width={80}
              height={80}
            />
            <button
              className="ml-auto block xl:hidden "
              onClick={() => setShowMenu(!showMenu)}
            >
              <svg
                fill="#000000"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30 30"
                width="30px"
                height="30px"
              >
                <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z" />
              </svg>
            </button>
            <ul className="xl:flex hidden gap-16">
              <li className=" cursor-pointer relative">
                <div className="flex items-center ">
                  <a className="  cursor-pointer font-semibold text-base leading-4 text-gray-600 ">
                    Home
                  </a>
                </div>
              </li>
              <li className="  relative mx-4">
                <div className="flex items-center ">
                  <a className="cursor-pointer font-semibold text-base leading-4 text-gray-600  ">
                    Explore
                  </a>
                </div>
              </li>
              <li className="  relative">
                <div className="flex items-center ">
                  <a className=" cursor-pointer font-semibold text-base leading-4 text-gray-600  ">
                    Packages
                  </a>
                </div>
              </li>
              <li className="  relative mx-4">
                <div className="flex items-center ">
                  <a className="cursor-pointer font-semibold text-base leading-4 text-gray-600  ">
                    Timeline
                  </a>
                </div>
              </li>
              <li className="  relative mx-4">
                <div className="flex items-center ">
                  <a className="cursor-pointer font-semibold text-base leading-4 text-gray-600  ">
                    About
                  </a>
                </div>
              </li>
              <li className="  relative">
                <div className="flex items-center ">
                  <a className=" cursor-pointer font-semibold text-base leading-4 text-gray-600  ">
                    Contact
                  </a>
                </div>
              </li>
              <li className="  relative mx-4">
                <div className="flex items-center ">
                  <a className="cursor-pointer font-semibold text-base leading-4 text-gray-600  ">
                    Register
                  </a>
                </div>
              </li>
            </ul>
            <ul
              className={`${
                showMenu ? " xl:hidden flex " : "hidden"
              } flex-col w-full px-8  rounded-xl my-6  `}
            >
              <li className=" cursor-pointer relative pb-4 pt-8">
                <div className="flex items-center ">
                  <a className="cursor-pointer font-normal text-base leading-4 text-gray-600 ">
                    Home
                  </a>
                </div>
              </li>
              <li className="  relative py-2">
                <div className="flex items-center ">
                  <a className="cursor-pointer cursor-pointer font-normal text-base leading-4 text-gray-600 ">
                    Explore
                  </a>
                </div>
              </li>
              <li className="relative py-2">
                <div className="flex items-center ">
                  <a className="cursor-pointer cursor-pointer font-normal text-base leading-4 text-gray-600 ">
                    Packages
                  </a>
                </div>
              </li>
              <li className="relative py-2">
                <div className="flex items-center ">
                  <a className="cursor-pointer cursor-pointer font-normal text-base leading-4 text-gray-600 ">
                    Timeline
                  </a>
                </div>
              </li>
              <li className="relative py-2">
                <div className="flex items-center ">
                  <a className="cursor-pointer cursor-pointer font-normal text-base leading-4 text-gray-600 ">
                    About
                  </a>
                </div>
              </li>
              <li className="relative py-2">
                <div className="flex items-center ">
                  <a className="cursor-pointer cursor-pointer font-normal text-base leading-4 text-gray-600 ">
                    Contact
                  </a>
                </div>
              </li>
              <li className="relative py-2">
                <div className="flex items-center ">
                  <a className="cursor-pointer cursor-pointer font-normal text-base leading-4 text-gray-600 ">
                    Register
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="hidden lg:block xl:block 2xl:block ">
        <div className="container mx-auto mt-12 flex relative justify-center px-20 lg:px-3 xl:px-3 2xl:px-3 ">
          <div className="pt-20 max-w-[31%] ">
            <h1 className="text-6xl lg:text-8xl xl:text-9xl 2xl:text-9xl  text-gray-800 mt-28 font-bold z-20 uppercase ">
              BAREFOOT ADVENTURES
            </h1>
            <h1 className="text-gray-600 mt-12">
              A travel agency is a tourism-related services to the general
              public to offer different kinds of travelling packages for each
              destination.
            </h1>
          </div>
          <div className="">
            <Image
              className="-z-20 max-w-[60%]"
              src="/train.svg"
              width={843}
              height={750}
            />
          </div>
        </div>
      </div>
      <div className="container mx-auto block lg:hidden xl:hidden 2xl:hidden">
        <div className="p-5">
          <div className="">
            <h1 className="text-3xl text-center text-gray-800 mt-12 font-bold uppercase ">
              BAREFOOT ADVENTURES
            </h1>
          </div>
          <div className="mt-6">
            <div className="">
              <Image
                className="mx-auto"
                src="/train.svg"
                width={843}
                height={750}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container pt-32 pb-32 mx-auto">
        <div className="gap-12 flex flex-col lg:flex-col xl:flex-row 2xl:flex-row justify-items-center place-content-center items-center justify-center">
          <div className="w-9/12 mx-auto mb-12 lg:mb-0 xl:mb-0 2xl:mb-0">
            <h1 className="text-4xl lg:text-9xl xl:text-9xl 2xl:text-9xl font-bold text-center  text-gray-800">
              TIMELINE
            </h1>
            <div className="mt-12">
              <button className="hidden lg:block 2xl:block xl:block mx-auto text-center font-semibold  text-xl bg-gray-800 hover:bg-gray-600 focus:bg-gray-600 text-white px-10 py-4 flex">
                Book Now
              </button>
              <button className="block lg:hidden xl:hidden 2xl:hidden mx-auto text-center justify-center items-center font-semibold  text-xl bg-gray-800 hover:bg-gray-600 focus:bg-gray-600 text-white py-6 w-full flex">
                Book Now
              </button>
            </div>
          </div>
          <div className="w-10/12 ">
            <div className="bg-gray-50 p-12">
              <div className="">
                <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row pt-12 pb-12  border-b-2 ">
                  <div className="text-2xl  lg:text-5xl md:text-5xl xl:text-5xl 2xl:text-5xl text-center lg:text-left xl:text-left 2xl:text-left font-bold text-gray-800">
                    Trip to Greece
                  </div>
                  <div className="ml-0 md:ml-auto lg:ml-auto xl:ml-auto 2xl:ml-auto text-center text-xl  lg:text-3xl md:text-3xl xl:text-3xl 2xl:text-3xl font-bold text-gray-600">
                    10 Days
                  </div>
                </div>
                <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row pt-12 pb-12  border-b-2 ">
                  <div className="">
                    <div className="text-2xl font-bold text-gray-600 text-center  lg:text-left md:text-left xl:text-left 2xl:text-left">
                      Batch 1
                    </div>
                    <h3 className="text-2xl mt-2 text-gray-800 text-center  lg:text-left md:text-left xl:text-left 2xl:text-left">
                      August 1, 2022
                    </h3>
                  </div>
                  <div className="ml-0 md:ml-auto lg:ml-auto xl:ml-auto 2xl:ml-auto text-center text-xl font-semibold text-gray-600 ">
                    Slots filled
                  </div>
                </div>
                <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row pt-12 pb-12  border-b-2 ">
                  <div className="">
                    <div className="text-2xl font-bold text-center text-gray-600  lg:text-left md:text-left xl:text-left 2xl:text-left">
                      Batch 2
                    </div>
                    <h3 className="text-2xl mt-2 text-center text-gray-800  lg:text-left md:text-left xl:text-left 2xl:text-left">
                      August 15, 2022
                    </h3>
                  </div>
                  <div className="ml-0 md:ml-auto lg:ml-auto xl:ml-auto 2xl:ml-auto text-center text-xl font-semibold  text-gray-600">
                    Slots available
                  </div>
                </div>
                <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row pt-12 pb-12  border-b-2 ">
                  <div className="">
                    <div className="text-2xl font-semibold text-center text-gray-600  lg:text-left md:text-left xl:text-left 2xl:text-left">
                      Batch 3
                    </div>
                    <h3 className="text-2xl mt-2 text-gray-800 text-center  lg:text-left md:text-left xl:text-left 2xl:text-left">
                      August 25, 2022
                    </h3>
                  </div>
                  <div className="ml-0 md:ml-auto lg:ml-auto xl:ml-auto 2xl:ml-auto text-center text-xl font-semibold  text-gray-600">
                    Slots available
                  </div>
                </div>
                <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row pt-12 pb-3 ">
                  <div className="">
                    <div className="text-2xl font-bold text-gray-600 text-center lg:text-left md:text-left xl:text-left 2xl:text-left">
                      Batch 4
                    </div>
                    <h3 className="text-2xl mt-2 text-center  lg:text-left md:text-left xl:text-left 2xl:text-left">
                      September 1, 2022
                    </h3>
                  </div>
                  <div className="ml-0 md:ml-auto lg:ml-auto xl:ml-auto 2xl:ml-auto text-center text-xl font-semibold  text-gray-600">
                    Slots available
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container hidden 2xl:block xl:block mx-auto mt-12 mb-56">
        <div className="flex gap-7">
          <div className="w-11/12">
            <div className="flex gap-5">
              <div className=" flex flex-col w-11/12 p-5 ">
                <div className=" p-5 border border-gray-200">
                  <h1 className="text-gray-600 text-9xl font-bold">1.</h1>
                  <h1 className="mt-6 text-7xl lg:text-7xl xl:text-6xl 2xl:text-7xl font-semibold text-gray-800">
                    Tell us what you want
                  </h1>
                  <h1 className="mb-3 font-semibold text-4xl lg:text-4xl xl:text-3xl 2xl:text-4xl mt-8 text-gray-600">
                    Fill out a form sharing all details about your likes and
                    dislikes
                  </h1>
                </div>
                <div className=" mt-12 border border-gray-200 p-5">
                  <h1 className="text-gray-600 text-9xl font-bold">3.</h1>
                  <h1 className="mt-6 text-7xl lg:text-7xl xl:text-6xl 2xl:text-7xl font-semibold">
                    Finalize the
                  </h1>
                  <div className="text-7xl flex lg:text-7xl xl:text-6xl 2xl:text-7xl font-semibold">
                    <h1 className="text-7xl flex lg:text-7xl xl:text-6xl 2xl:text-7xl font-semibold">
                      plan we{" "}
                    </h1>
                    <h1 className="text-7xl flex lg:text-7xl xl:text-6xl 2xl:text-7xl font-semibold ml-3">
                      gave
                    </h1>
                  </div>
                  <h1 className="mb-3 font-semibold text-4xl lg:text-4xl xl:text-3xl 2xl:text-4xl mt-8 text-gray-600">
                    Alter the plan we provided according to your details.
                  </h1>
                </div>
              </div>
              <div className="w-11/12 flex flex-col p-3 mt-20">
                <div className=" p-5 border border-gray-200 p-5">
                  <h1 className="text-gray-600 text-9xl font-bold">2.</h1>
                  <h1 className="mt-6 text-7xl lg:text-7xl xl:text-6xl 2xl:text-7xl font-semibold">
                    Share your plan with us
                  </h1>
                  <h1 className="mb-3 font-semibold text-4xl lg:text-4xl xl:text-3xl 2xl:text-4xl mt-8 text-gray-600">
                    Share all details including days and number of people.
                  </h1>
                </div>
                <div className=" mt-12 border border-gray-200 p-5">
                  <h1 className="text-gray-600 text-9xl font-bold">4.</h1>
                  <h1 className="mt-6 text-7xl lg:text-7xl xl:text-6xl 2xl:text-7xl font-semibold">
                    Have fun on your trip
                  </h1>
                  <h1 className="mb-3 font-semibold text-4xl lg:text-4xl xl:text-3xl 2xl:text-4xl mt-8 text-gray-600">
                    Alter the plan we provided according to your details.
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="w-4/12">
            <div className="mt-48">
              <h1 className="font-bold text-9xl text-right text-gray-800 mt-7">
                MAKE
              </h1>
              <h1 className="font-bold text-9xl text-right text-gray-800 mt-7">
                YOUR
              </h1>
              <h1 className="font-bold text-9xl text-right text-gray-800 mt-7">
                OWN
              </h1>
              <h1 className="font-bold text-9xl text-right text-gray-800 mt-7">
                TRIP
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto block xl:hidden p-5">
        <h1 className="font-bold text-2xl md:text-5xl lg:text-7xl lg:text-7xl lg:text-7xl text-gray-800 mt-7 text-center">
          MAKE YOUR OWN TRIP
        </h1>
        <div className="flex flex-col lg:flex-row md:flex-row place-content-center justify-center items-center  gap-12 mt-20">
          <div className="w-11/12">
            <div className=" p-5 border border-gray-200 " height={368}>
              <h1 className="text-gray-600 text-9xl font-bold">1.</h1>
              <h1 className="text-2xl md:text-4xl lg:text-7xl xl:text-6xl 2xl:text-7xl font-semibold text-gray-800">
                Tell us what you want
              </h1>
              <h1 className="font-semibold text-xl md:text-xl lg:text-4xl xl:text-3xl 2xl:text-4xl mt-8 text-gray-600">
                Fill out a form sharing all details about your likes and
                dislikes
              </h1>
            </div>
            <div
              className=" p-5 border border-gray-200 p-5 mt-12 "
              height={368}
            >
              <h1 className="text-gray-600 text-9xl font-bold">2.</h1>
              <h1 className="text-2xl md:text-4xl lg:text-7xl xl:text-6xl 2xl:text-7xl lg:text-7xl xl:text-6xl 2xl:text-7xl font-semibold">
                Share your plan with us
              </h1>
              <h1 className="font-semibold text-xl md:text-xl  lg:text-4xl xl:text-3xl 2xl:text-4xl mt-8 text-gray-600">
                Share all details including days and number of people.
              </h1>
            </div>
          </div>
          <div className="w-11/12">
            <div className=" border border-gray-200 p-5 mt-12 " height={368}>
              <h1 className="text-gray-600 text-9xl font-bold">3.</h1>
              <h1 className="text-2xl md:text-4xl lg:text-7xl xl:text-6xl 2xl:text-7xl lg:text-7xl xl:text-6xl 2xl:text-7xl font-semibold">
                Finalize the plan we give
              </h1>
              <h1 className="font-semibold text-xl md:text-xl  lg:text-4xl xl:text-3xl 2xl:text-4xl mt-8 text-gray-600">
                Alter the plan we provided according to your details.
              </h1>
            </div>
            <div className=" border border-gray-200 p-5 mt-12 " height={368}>
              <h1 className="text-gray-600 text-9xl font-bold">4.</h1>
              <h1 className="text-2xl md:text-4xl lg:text-7xl xl:text-6xl 2xl:text-7xl lg:text-7xl xl:text-6xl 2xl:text-7xl font-semibold">
                Have fun on your trip
              </h1>
              <h1 className="font-semibold text-xl md:text-xl  lg:text-4xl xl:text-3xl 2xl:text-4xl mt-8 text-gray-600">
                Alter the plan we provided according to your details.
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto hidden  xl:block 2xl:block">
        <div className="flex   gap-12 mt-12 mb-12">
          <div className="w-7/12">
            <h1 className="text-9xl text-left font-bold mt-44 text-gray-800">
              POPULAR PLACE
            </h1>
          </div>
          <div className="w-10/12 relative ">
            <Image className="" src="/Norway.svg" width={733} height={600} />
            <h1 className="absolute p-4 text-6xl bottom-36 text-white font-semibold">
              NORWAY
            </h1>
            <h1 className="absolute w-9/12 bottom-6 text-white text-2xl p-4">
              Norway is a Scandinavian country encompassing mountains, glaciers
              and deep coastal fjords. Oslo, the capital, is a city of green
              spaces and museums.
            </h1>
          </div>
        </div>
        <div className="">
          <div className="flex">
            <div className="w-10/12 relative">
              <Image
                className=""
                src="/switzerland.svg"
                width={733}
                height={600}
              />
              <h1 className="absolute p-4 text-6xl bottom-36 text-white font-semibold">
                SWITERZERLAND
              </h1>
              <h1 className="absolute bottom-6 w-9/12 text-white text-2xl p-4">
                Norway is a Scandinavian country encompassing mountains,
                glaciers and deep coastal fjords. Oslo, the capital, is a city
                of green spaces and museums.
              </h1>
            </div>
            <div className="w-9/12">
              <h1 className="text-9xl text-gray-800  font-bold mt-44 pr-1 xl:pr-2 2xl:pr-32 lg:pr-1 text-right">
                TO GO AND LIVE
              </h1>
            </div>
          </div>
        </div>
        <div className="flex gap-12 mt-12 mb-12">
          <div className="w-7/12">
            <h1 className="text-9xl font-bold mt-44 text-gray-800 text-left">
              TO HAVE FUN
            </h1>
          </div>
          <div className="w-10/12 relative ">
            <Image className="" src="/iceland.svg" width={733} height={600} />
            <h1 className="absolute p-4 text-6xl bottom-36 text-white font-semibold">
              ICELAND
            </h1>
            <h1 className="absolute bottom-6 w-9/12 text-white text-2xl p-4">
              Norway is a Scandinavian country encompassing mountains, glaciers
              and deep coastal fjords. Oslo, the capital, is a city of green
              spaces and museums.
            </h1>
          </div>
        </div>
        <div className="">
          <div className="flex">
            <div className="w-10/12 relative">
              <Image className="" src="/greece.svg" width={733} height={600} />
              <h1 className="absolute p-4 text-6xl bottom-36 text-white font-semibold">
                GREECE
              </h1>
              <h1 className="absolute bottom-6 w-9/12 text-white text-2xl p-4">
                Norway is a Scandinavian country encompassing mountains,
                glaciers and deep coastal fjords. Oslo, the capital, is a city
                of green spaces and museums.
              </h1>
            </div>
            <div className="w-9/12">
              <h1 className="text-9xl text-gray-800 font-bold mt-16 pr-1 xl:pr-2 2xl:pr-32 lg:pr-1 text-right">
                TO WATCH SUNSETS
              </h1>
            </div>
          </div>
        </div>
        <div className="flex gap-12 mt-12 mb-12">
          <div className="w-7/12">
            <h1 className="text-9xl font-bold mt-2 text-gray-800 text-left">
              TO HAVE MOMENT OF A LIFETIME
            </h1>
          </div>
          <div className="w-10/12 relative ">
            <Image className="" src="/PARIS.svg" width={733} height={600} />
            <h1 className="absolute p-4 text-6xl bottom-36 text-white font-semibold">
              PARIS
            </h1>
            <h1 className="absolute w-11/12 bottom-6 text-white text-sm p-4">
              Norway is a Scandinavian country encompassing mountains, glaciers
              and deep coastal fjords. Oslo, the capital, is a city of green
              spaces and museums.
            </h1>
          </div>
        </div>
      </div>
      <div className="container mx-auto block  2xl:hidden xl:hidden p-5">
        <div className="flex flex-col justify-center items-center mx-auto place-content-center">
          <div className="">
            <h1 className="text-3xl md:text-3xl lg:text-9xl  xl:text-9xl  2xl:text-9xl font-bold mt-44 text-gray-800">
              POPULAR PLACES
            </h1>
          </div>
          <div className=" relative mt-8">
            <Image
              className="mx-auto"
              src="/Norway.svg"
              width={733}
              height={600}
            />
            <h1 className="absolute p-4 text-2xl  bottom-32 text-white font-semibold">
              NORWAY
            </h1>
            <h1 className="absolute w-11/12 bottom-6 text-white text-sm p-4">
              Norway is a Scandinavian country encompassing mountains, glaciers
              and deep coastal fjords. Oslo, the capital, is a city of green
              spaces and museums.
            </h1>
          </div>
          <div className="">
            <h1 className="text-3xl md:text-3xl lg:text-9xl  xl:text-9xl  2xl:text-9xl font-bold mt-44 text-gray-800">
              TO GO AND LIVE
            </h1>
          </div>
          <div className=" relative ">
            <Image
              className="mx-auto"
              src="/switzerland.svg"
              width={733}
              height={600}
            />
            <h1 className="absolute p-4 text-2xl bottom-32 text-white font-semibold">
              SWITERZERLAND
            </h1>
            <h1 className="absolute w-11/12 bottom-6 text-white text-sm p-4">
              Norway is a Scandinavian country encompassing mountains, glaciers
              and deep coastal fjords. Oslo, the capital, is a city of green
              spaces and museums.
            </h1>
          </div>
          <div className="">
            <h1 className="text-3xl md:text-3xl lg:text-9xl  xl:text-9xl  2xl:text-9xl font-bold mt-44 text-gray-800">
              TO HAVE FUN
            </h1>
          </div>
          <div className=" relative ">
            <Image
              className="mx-auto"
              src="/iceland.svg"
              width={733}
              height={600}
            />
            <h1 className="absolute p-4 text-2xl bottom-32 text-white font-semibold">
              ICELAND
            </h1>
            <h1 className="absolute w-11/12 bottom-6 text-white text-sm p-4">
              Norway is a Scandinavian country encompassing mountains, glaciers
              and deep coastal fjords. Oslo, the capital, is a city of green
              spaces and museums.
            </h1>
          </div>
          <div className="">
            <h1 className="text-3xl md:text-3xl lg:text-9xl  xl:text-9xl  2xl:text-9xl font-bold mt-44 text-gray-800">
              TO WATCH SUNSETS
            </h1>
          </div>
          <div className=" relative ">
            <Image
              className="mx-auto"
              src="/greece.svg"
              width={733}
              height={600}
            />
            <h1 className="absolute p-4 text-2xl bottom-32 text-white font-semibold">
              GREECE
            </h1>
            <h1 className="absolute w-11/12 bottom-6 text-white text-sm p-4">
              Norway is a Scandinavian country encompassing mountains, glaciers
              and deep coastal fjords. Oslo, the capital, is a city of green
              spaces and museums.
            </h1>
          </div>
          <div className="">
            <h1 className="text-3xl md:text-3xl lg:text-9xl  xl:text-9xl  2xl:text-9xl text-center font-bold mt-44 text-gray-800">
              TO HAVE MOMENT OF A LIFETIME
            </h1>
          </div>
          <div className=" relative ">
            <Image
              className="mx-auto"
              src="/paris.svg"
              width={733}
              height={600}
            />
            <h1 className="absolute p-4 text-2xl bottom-32 text-white font-semibold">
              PARIS
            </h1>
            <h1 className="absolute w-11/12 bottom-6 text-white text-sm p-4">
              Norway is a Scandinavian country encompassing mountains, glaciers
              and deep coastal fjords. Oslo, the capital, is a city of green
              spaces and museums.
            </h1>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-32 mb-12">
        <div className="flex flex-col lg:flex-row xl:flex-row 2xl:flex-row mx-auto gap-12 ">
          <div className="w-11/12">
            <h1 className="text-2xl lg:text-9xl xl:text-9xl 2xl:text-9xl font-bold mt-20 text-gray-800 text-center">
              ABOUT US
            </h1>
          </div>
          <div className="w-10/12 mx-auto">
            <div className="">
              <Image
                className=""
                src="/Hourglass (1).svg"
                width={128}
                height={128}
              />
            </div>
            <h1 className="text-xl md:text-xl lg:text-2xl xl:text-2xl 2xl:text-2xl font-semibold mt-8 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              laoreet lectus quam, quis euismod turpis ornare quis. Morbi
              tincidunt erat quis eros semper dignissim. Cras risus dui,
              ultrices vel sem vitae, tristique hendrerit lacus. Vivamus mattis
              ultricies ullamcorper. Morbi at ligula sit amet risus suscipi.
            </h1>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-12 mb-12">
        <div className="flex  flex-col-reverse  lg:flex-row xl:flex-row">
          <div className="flex flex-col md:flex-row lg;lflex-row 2xl:flex-row gap-12  mx-auto">
            <div className="mt-6  md:mt-24 lg:mt-24 xl:mt-24 2xl:mt-24">
              <h1 className="text-6xl font-semibold text-gray-800">10M+</h1>
              <h1 className="text-2xl font-semibold text-gray-600">VISITORS</h1>
            </div>
            <div className="mt-6   md:mt-24 lg:mt-24 xl:mt-24 2xl:mt-24">
              <h1 className="text-6xl font-semibold text-gray-800">1260</h1>
              <h1 className="text-2xl font-semibold text-gray-600">Hotels</h1>
            </div>
            <div className="mt-6  md:mt-24 lg:mt-24 xl:mt-24 2xl:mt-24">
              <h1 className="text-6xl font-semibold text-gray-800">30K+</h1>
              <h1 className="text-2xl font-semibold text-gray-600">
                Customers
              </h1>
            </div>
          </div>
          <div className=" mx-auto lg:ml-auto xl:ml-auto 2xl:ml-auto ">
            <div className="hidden md:block">
              <h1 className="text-9xl font-bold text-gray-800">Since</h1>
              <h1 className="text-9xl font-bold text-gray-800">2005</h1>
            </div>
            <div className="block md:hidden">
              <h1 className="text-4xl font-bold text-gray-800">Since 2005</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto pt-32 pb-32">
        <div className=" mt-12">
          <h1 className="text-2xl lg:text-9xl xl:text-9xl 2xl:text-9xl font-bold text-gray-800  ">
            HOLIDAYS SEASON SPECIAL OFFERS
          </h1>
          <div className="flex">
            <div className="">
              <h1 className="text-xl lg:text-4xl 2xl:text-4xl xl:text-4xl font-semibold mt-12 text-gray-600">
                A 20 days trip to all your favourite destinations
              </h1>
            </div>
            <div className="ml-auto">
              <Image
                className=""
                src="/arrow-forward.svg"
                width={296}
                height={128}
              />
            </div>
          </div>
        </div>
        <div className="flex gap-12">
          <div className="">
            <Image
              className=""
              src="/Rectangle 49.svg"
              width={296}
              height={265}
            />
          </div>
          <div className="">
            <Image
              className=""
              src="/Rectangle 50.svg"
              width={296}
              height={265}
            />
          </div>
          <div className="">
            <Image
              className=""
              src="/Rectangle 51.svg"
              width={296}
              height={265}
            />
          </div>
        </div>
      </div>
      <footer className="hidden lg:block 2xl:block 2xl:block bg-gray-800 w-full hidden">
        <div className="relative container mx-auto">
          <Image className="" src="/image 11.svg" width={1440} height={384} />
          <div className="flex   place-content-center place-items-center justify-center mx-auto justify-items-center ">
            <div className=" w-5/12 left-12 bottom-24 top-24 lg:top-3 lg:bottom-3 xl:top-24 xl:bottom-24 2xl:top-24 2xl:bottom-24 absolute ">
              <div className="flex">
                <div className=" p-5 w-4/12">
                  <div className="text-white font-semibold cursor-pointer mt-2  ">
                    Home
                  </div>
                  <div className="text-white font-semibold cursor-pointer mt-2  ">
                    Explore
                  </div>
                  <div className="text-white font-semibold cursor-pointer mt-2  ">
                    Packages
                  </div>
                  <div className="text-white font-semibold cursor-pointer mt-2  ">
                    Timeline
                  </div>
                  <div className="text-white font-semibold cursor-pointer mt-2  ">
                    About
                  </div>
                  <div className="text-white font-semibold cursor-pointer mt-2 ">
                    Contact
                  </div>
                </div>
                <div className="w-4/12 border-l border-gray-600 p-5 ">
                  <h1 className="text-gray-300 mt-12">Follow us on socials</h1>
                  <div className="flex gap-6 mt-4">
                    <div className="">
                      <Image
                        className="cursor-pointer"
                        src="/FB.svg"
                        width={8.27}
                        height={15.29}
                      />
                    </div>
                    <div className="">
                      <Image
                        className="cursor-pointer"
                        src="/Group 15.svg"
                        width={15.29}
                        height={15.29}
                      />
                    </div>
                    <div className="">
                      <Image
                        className="cursor-pointer"
                        src="/twitter.svg"
                        width={15.6}
                        height={12.87}
                      />
                    </div>
                    <div className="">
                      <Image
                        className="cursor-pointer"
                        src="/IN.svg"
                        width={12.79}
                        height={12.23}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" w-5/12 bottom-24 top-24 lg:top-12 lg:bottom-16 xl:top-32 xl:bottom-32 2xl:top-24 2xl:bottom-24  right-12 absolute">
              <h1 className="font-semibold text-3xl text-white">
                Join our mailing list for update about latest packages and
                deals!
              </h1>
              <div className="relative text-white  ">
                <input
                  className="border-b-2 border-gray-600 bg-transparent w-full text-white w-full h-16 mb-3 leading-tight focus:outline-none  text-white"
                  id="grid-Email"
                  type="text"
                  placeholder="Email"
                />
                <button className="absolute cursor-pointer mb-1 right-0 text-white py-5 px-4 top-0 ">
                  <Image
                    className="cursor-pointer"
                    src="/arrow-forward.svg"
                    width={24}
                    height={24}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="bg-gray-800 block lg:hidden 2xl:hidden xl:hidden w-full">
        <div className="flex flex-col mx-auto pt-12">
          <div className=" mx-auto">
            <div className="mx-auto ">
              <div className="text-white font-semibold cursor-pointer mt-2 text-center  ">
                Home
              </div>
              <div className="text-white font-semibold cursor-pointer mt-2 text-center  ">
                Explore
              </div>
              <div className="text-white font-semibold cursor-pointer mt-2 text-center  ">
                Packages
              </div>
              <div className="text-white font-semibold cursor-pointer mt-2 text-center  ">
                Timeline
              </div>
              <div className="text-white font-semibold cursor-pointer mt-2 text-center  ">
                About
              </div>
              <div className="text-white font-semibold cursor-pointer mt-2 text-center  ">
                Contact
              </div>
            </div>
          </div>
          <div className=" mx-auto">
            <h1 className="text-gray-300 mt-12">Follow us on socials</h1>
            <div className="flex gap-6 mt-4">
              <div className="">
                <Image
                  className="cursor-pointer"
                  src="/FB.svg"
                  width={8.27}
                  height={15.29}
                />
              </div>
              <div className="">
                <Image
                  className="cursor-pointer"
                  src="/Group 15.svg"
                  width={15.29}
                  height={15.29}
                />
              </div>
              <div className="">
                <Image
                  className="cursor-pointer"
                  src="/twitter.svg"
                  width={15.6}
                  height={12.87}
                />
              </div>
              <div className="">
                <Image
                  className="cursor-pointer"
                  src="/IN.svg"
                  width={12.79}
                  height={12.23}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto">
          <h1 className="font-semibold text-xl text-white text-center">
            Join our mailing list for update about latest packages and deals!
          </h1>
          <div className="relative mx-auto text-white  ">
            <input
              className="border-b-2 border-gray-600 bg-transparent w-full text-white w-full h-16 mb-3 leading-tight focus:outline-none  text-white"
              id="grid-Email"
              type="text"
              placeholder="Email"
            />
            <button className="absolute cursor-pointer mb-1 right-0 text-white py-5 px-4 top-0 ">
              <Image
                className="cursor-pointer"
                src="/arrow-forward.svg"
                width={24}
                height={24}
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
