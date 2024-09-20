import React from 'react';
import { Link } from 'react-router-dom';
import smartHousingImg from "../assets/SmartHousing.jpg";
import royalSwissImg from "../assets/royalswiss1.jpg";
import adamsHousingImg from "../assets/AdamsHousing1.jpg";
import cityHousingImg from "../assets/City Housing 1.jpg";
import DHAMultanImg from "../assets/DHA 1.jpg";
import royalOrchadImg from "../assets/royal orchad 1.jpg";

const OurProjects = () => {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <div className="bg-white py-6">
      <h1 className='text-4xl font-bold text-center py-3'>IES Marketing Projects</h1>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-5">

        {/* DHA Multan */}
        <Link to="/project/DHA-multan" onClick={scrollToTop}
          className="relative flex flex-col cursor-pointer border border-gray-300 rounded-2xl transition-all duration-[0.5s] hover:border-blue-800 hover:shadow-2xl text-gray-700 bg-white bg-clip-border"
        >
          <div className="relative h-56 overflow-hidden text-white shadow-lg bg-clip-border rounded-t-xl bg-blue-gray-500 shadow-blue-gray-500/40">
            <img
              src={DHAMultanImg}
              alt="card-image"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="p-6">
            <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              DHA Multan
            </h5>
            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
              Defense Housing Authority (DHA) is a prestigious residential community featuring well-planned residential plots and commercial areas equipped with modern infrastructure and provide a secure living environment. DHA Multan stands as a symbol of contemporary living for providing high standards of living to residents.
            </p>
          </div>
          <div className="p-6 pt-0">
            <button
              className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
              type="button"
            >
              View More
            </button>
          </div>
        </Link>

        {/* Royal Orchad*/}
        <Link to="/project/royal-orchad" onClick={scrollToTop}
          className="relative flex flex-col cursor-pointer border border-gray-300 rounded-2xl transition-all duration-[0.5s] hover:border-blue-800 hover:shadow-2xl text-gray-700 bg-white bg-clip-border"
        >
          <div className="relative h-56 overflow-hidden text-white shadow-lg bg-clip-border rounded-t-xl bg-blue-gray-500 shadow-blue-gray-500/40">
            <img
              src={royalOrchadImg}
              alt="card-image"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="p-6">
            <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              Royal Orchard Multan
            </h5>
            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
              Royal Orchard Multan provides a luxurious and comfortable lifestyle in the fast-growing city of South Punjab. It offers residential and commercial plots with modern infrastructure, including underground electricity, wide roads, and a sewerage system, and follows international community standards.
            </p>
          </div>
          <div className="p-6 pt-0">
            <button
              className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
              type="button"
            >
              View More
            </button>
          </div>
        </Link>

        {/* city Housing */}
        <Link to="/project/citi-housing" onClick={scrollToTop}
          className="relative flex flex-col cursor-pointer border border-gray-300 rounded-2xl transition-all duration-[0.5s] hover:border-blue-800 hover:shadow-2xl text-gray-700 bg-white bg-clip-border"
        >
          <div className="relative h-56 overflow-hidden text-white shadow-lg bg-clip-border rounded-t-xl bg-blue-gray-500 shadow-blue-gray-500/40">
            <img
              src={cityHousingImg}
              alt="card-image"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="p-6">
            <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              CITI Housing Multan
            </h5>
            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
              Citi Housing Multan is an exclusive housing project in the City of Saints, aimed to bring modern living standards. It offers residential plots, commercial areas, and recreational facilities to residents and investors. This gated community features 120 to 180-foot main-boulevard. It provides world-class amenities and ultra-luxurious lifestyles.
            </p>
          </div>
          <div className="p-6 pt-0">
            <button
              className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
              type="button"
            >
              View More
            </button>
          </div>
        </Link>


        {/* Adams housing */}
        <Link to="/project/adams-housing" onClick={scrollToTop}
          className="relative flex flex-col cursor-pointer border border-gray-300 rounded-2xl transition-all duration-[0.5s] hover:border-blue-800 hover:shadow-2xl text-gray-700 bg-white bg-clip-border"
        >
          <div className="relative h-56 overflow-hidden text-white shadow-lg bg-clip-border rounded-t-xl bg-blue-gray-500 shadow-blue-gray-500/40">
            <img
              src={adamsHousingImg}
              alt="card-image"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="p-6">
            <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              Adams Housing Multan
            </h5>
            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
              Adams Housing Multan stands as a beacon of modern living that offers contemporary amenities and high-quality infrastructure, providing residents with convenient access to the city's landmarks. Adams Housing prioritizes sustainability and ensures ample green space for recreation.            </p>
          </div>
          <div className="p-6 pt-0">
            <button
              className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
              type="button"
            >
              View More
            </button>
          </div>
        </Link>


        {/* Smart Housing */}
        <Link to="/project/smart-housing" onClick={scrollToTop}
          className="relative flex flex-col cursor-pointer border border-gray-300 rounded-2xl transition-all duration-[0.5s] hover:border-blue-800 hover:shadow-2xl text-gray-700 bg-white bg-clip-border"
        >
          <div className="relative h-56 overflow-hidden text-white shadow-lg bg-clip-border rounded-t-xl bg-blue-gray-500 shadow-blue-gray-500/40">
            <img
              src={smartHousingImg}
              alt="card-image"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="p-6">
            <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              Smart Housing Multan
            </h5>
            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
              Smart Housing Multan (SHM) is a modern housing society in the City of Saints with cutting-edge automation systems and modern infrastructure. The residents can enjoy exclusive perks, elite amenities, and upscale conveniences by choosing Smart Housing Society.
            </p>
          </div>
          <div className="p-6 pt-0">
            <button
              className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
              type="button"
            >
              View More
            </button>
          </div>
        </Link>

        {/* Royal Swiss */}
        <Link to={`/project/royal-swiss`} onClick={scrollToTop}
          className="relative flex flex-col cursor-pointer border border-gray-300 rounded-2xl transition-all duration-[0.5s] hover:border-blue-800 hover:shadow-2xl text-gray-700 bg-white bg-clip-border"
        >
          <div className="relative h-56 overflow-hidden text-white shadow-lg bg-clip-border rounded-t-xl bg-blue-gray-500 shadow-blue-gray-500/40">
            <img
              src={royalSwissImg}
              alt="card-image"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="p-6">
            <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              Royal Swiss Multan
            </h5>
            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
              Royal Swiss Housing is the latest project in Multan aimed to revolutionize the standards of housing in the city. It is developing at a faster pace, and developmental standards are exemplary, featuring efficient drainage systems, wide roads, and reliable utility services
            </p>
          </div>
          <div className="p-6 pt-0">
            <button
              className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
              type="button"
            >
              View More
            </button>
          </div>
        </Link>
        
      </div>
    </div>
  );
};

export default OurProjects;
