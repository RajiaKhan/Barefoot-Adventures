import React from "react";
import Image from "next/image";
const Index = () => {
  return (
    <>
      <nav className="flex">
        <div className="">
          <Image
            className="cursor-pointer"
            src="/Hourglass.svg"
            width={80}
            height={80}
          />
        </div>
        <div className="ml-auto px-12">
          <div className="flex gap-12 mt-7">
            <div className="cursor-pointer font-medium text-gray-600">Home</div>
            <div className="cursor-pointer font-medium text-gray-600">
              Explore
            </div>
            <div className="cursor-pointer font-medium text-gray-600">
              Packages
            </div>
            <div className="cursor-pointer font-medium text-gray-600">
              Timeline
            </div>
            <div className="cursor-pointer font-medium text-gray-600">
              About
            </div>
            <div className="cursor-pointer font-medium text-gray-600">
              Contact
            </div>
            <div className="cursor-pointer font-medium text-gray-600">
              Register
            </div>
          </div>
        </div>
      </nav>
      <div className="container mx-auto ">
        <div className="flex ">
          <div className="w-11/12 ">
            <h1 className="text-8xl mt-32 font-bold  left-32">
              BAREFOOT ADVENTURES
            </h1>
          </div>
          <div className="w-11/12">
            <Image className="" src="/train.svg" width={843} height={750} />
          </div>
        </div>
      </div>
      <div className="container pt-32 pb-32 mx-auto">
        <div className="flex">
          <div className="w-11/12">
            <h1 className="text-9xl font-semibold text-center mt-80">
              Timeline
            </h1>
          </div>
          <div className="w-9/12 ">
            <div className="bg-gray-50 p-12">
              <div className="">
                <div className="flex pt-12 pb-12  border-b-2 ">
                  <div className="text-5xl font-bold">Trip to Greece</div>
                  <div className="ml-auto text-3xl font-bold">10 Days</div>
                </div>
                <div className="flex pt-12 pb-12  border-b-2 ">
                  <div className="">
                    <div className="text-2xl font-bold">Batch 1</div>
                    <h3 className="text-2xl mt-2">August 1, 2022</h3>
                  </div>
                  <div className="ml-auto text-xl font-semibold text-gray-600">
                    Slots filled
                  </div>
                </div>
                <div className="flex pt-12 pb-12  border-b-2 ">
                  <div className="">
                    <div className="text-2xl font-bold">Batch 2</div>
                    <h3 className="text-2xl mt-2">August 15, 2022</h3>
                  </div>
                  <div className="ml-auto text-xl font-semibold  text-gray-600">
                    Slots available
                  </div>
                </div>
                <div className="flex pt-12 pb-12  border-b-2 ">
                  <div className="">
                    <div className="text-2xl font-bold">Batch 3</div>
                    <h3 className="text-2xl mt-2">August 25, 2022</h3>
                  </div>
                  <div className="ml-auto text-xl font-semibold  text-gray-600">
                    Slots available
                  </div>
                </div>
                <div className="flex pt-12 pb-12  border-b-2 ">
                  <div className="">
                    <div className="text-2xl font-bold">Batch 4</div>
                    <h3 className="text-2xl mt-2">September 1, 2022</h3>
                  </div>
                  <div className="ml-auto text-xl font-semibold  text-gray-600">
                    Slots available
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-12 mb-56">
        <div className="flex gap-7">
          <div className="w-11/12">
            <div className="flex gap-5">
              <div className=" flex flex-col w-11/12 p-3 ">
                <div className=" p-5 border border-gray-200">
                  <h1 className="text-9xl font-bold">1.</h1>
                  <h1 className="text-7xl font-semibold">
                    Tell us what you want
                  </h1>
                  <h1 className="font-semibold text-4xl mt-8 text-gray-600">
                    Fill out a form sharing all details about your likes and
                    dislikes
                  </h1>
                </div>
                <div className=" mt-12 border border-gray-200 p-5">
                  <h1 className="text-9xl font-bold">3.</h1>
                  <h1 className="text-7xl font-semibold">
                    Finalize the plan we gave
                  </h1>
                  <h1 className="font-semibold text-4xl mt-8 text-gray-600">
                    Alter the plan we provided according to your details.
                  </h1>
                </div>
              </div>
              <div className="w-11/12 flex flex-col p-3 mt-16">
                <div className=" p-5 border border-gray-200 p-5">
                  <h1 className="text-9xl font-bold">2.</h1>
                  <h1 className="text-7xl font-semibold">
                    Share your plan with us
                  </h1>
                  <h1 className="font-semibold text-4xl mt-8 text-gray-600">
                    Share all details including days and number of people.
                  </h1>
                </div>
                <div className=" mt-12 border border-gray-200 p-5">
                  <h1 className="text-9xl font-bold">4.</h1>
                  <h1 className="text-7xl font-semibold">
                    Have fun on your trip
                  </h1>
                  <h1 className="font-semibold text-4xl mt-8 text-gray-600">
                    Alter the plan we provided according to your details.
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="w-4/12">
            <div className="mt-48">
              <h1 className="font-bold text-9xl text-right">MAKE</h1>
              <h1 className="font-bold text-9xl text-right">YOUR</h1>
              <h1 className="font-bold text-9xl text-right">OWN</h1>
              <h1 className="font-bold text-9xl text-right">TRIP</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto ">
        <div className="flex gap-12 mt-12 mb-12">
          <div className="w-9/12">
            <h1 className="text-9xl font-bold mt-12">POPULAR PLACES</h1>
          </div>
          <div className="w-10/12 relative ">
            <Image className="" src="/Norway.svg" width={733} height={600} />
            <h1 className="absolute p-4 text-6xl bottom-36 text-white font-semibold">
              NORWAY
            </h1>
            <h1 className="absolute bottom-0 text-white text-2xl p-4">
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
              <h1 className="absolute bottom-0 text-white text-2xl p-4">
                Norway is a Scandinavian country encompassing mountains,
                glaciers and deep coastal fjords. Oslo, the capital, is a city
                of green spaces and museums.
              </h1>
            </div>
            <div className="w-9/12">
              <h1 className="text-9xl font-bold mt-12">TO GO AND LIVE</h1>
            </div>
          </div>
        </div>
        <div className="flex gap-12 mt-12 mb-12">
          <div className="w-9/12">
            <h1 className="text-9xl font-bold mt-12">TO HAVE FUN</h1>
          </div>
          <div className="w-10/12 relative ">
            <Image className="" src="/iceland.svg" width={733} height={600} />
            <h1 className="absolute p-4 text-6xl bottom-36 text-white font-semibold">
              ICELAND
            </h1>
            <h1 className="absolute bottom-0 text-white text-2xl p-4">
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
              <h1 className="absolute bottom-0 text-white text-2xl p-4">
                Norway is a Scandinavian country encompassing mountains,
                glaciers and deep coastal fjords. Oslo, the capital, is a city
                of green spaces and museums.
              </h1>
            </div>
            <div className="w-9/12">
              <h1 className="text-9xl font-bold mt-12">TO WATCH SUNSETS</h1>
            </div>
          </div>
        </div>
        <div className="flex gap-12 mt-12 mb-12">
          <div className="w-9/12">
            <h1 className="text-9xl font-bold mt-12">
              TO HAVE MOMENT OF A LIFETIMES
            </h1>
          </div>
          <div className="w-10/12 relative ">
            <Image className="" src="/paris.svg" width={733} height={600} />
            <h1 className="absolute p-4 text-6xl bottom-36 text-white font-semibold">
              PARIS
            </h1>
            <h1 className="absolute bottom-0 text-white text-2xl p-4">
              Norway is a Scandinavian country encompassing mountains, glaciers
              and deep coastal fjords. Oslo, the capital, is a city of green
              spaces and museums.
            </h1>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-32 mb-12">
        <div className="flex gap-12  ">
          <div className="w-11/12">
            <h1 className="text-9xl font-bold mt-20">ABOUT US</h1>
          </div>
          <div className="w-10/12 ">
            <Image
              className=""
              src="/Hourglass (1).svg"
              width={128}
              height={128}
            />
            <h1 className="text-2xl font-semibold mt-8">
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
        <div className="flex">
          <div className="flex gap-12  mt-8">
            <div className="">
              <h1 className="text-6xl font-semibold">10M+</h1>
              <h1 className="text-2xl font-semibold">VISITORS</h1>
            </div>
            <div className="">
              <h1 className="text-6xl font-semibold">1260</h1>
              <h1 className="text-2xl font-semibold">Hotels</h1>
            </div>
            <div className="">
              <h1 className="text-6xl font-semibold">30K+</h1>
              <h1 className="text-2xl font-semibold">Customers</h1>
            </div>
          </div>
          <div className="ml-auto ">
            <h1 className="text-9xl font-bold">Since</h1>
            <h1 className="text-9xl font-bold">2005</h1>
          </div>
        </div>
      </div>
      <div className="container mx-auto pt-32 pb-32">
        <div className=" mt-12">
          <h1 className="text-9xl font-bold">HOLIDAYS SEASON SPECIAL OFFERS</h1>
          <div className="flex">
            <div className="">
              <h1 className="text-4xl font-semibold mt-12">
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
      <footer className="w-full bg-gray-800 pt-32 pb-32">
        <Image className="" src="/image 11.svg" width={1440} height={384} />
      </footer>
    </>
  );
};

export default Index;
