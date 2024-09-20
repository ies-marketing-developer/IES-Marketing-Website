import React from 'react'
import hiringPost from "../assets/hiring post.jpg"
import hiringVideo from "../assets/HIRING REEL .mp4"
import { Link } from 'react-router-dom'

const Career = () => {
  return (
    <div>

      <div className='py-6 flex justify-center items-center flex-wrap gap-4'>

        {/* Relationship Manager */}
        <Link to="/job/relationship-manager" className="relative flex flex-col bg-white shadow-sm border-slate-200 w-96 h-72 border rounded-2xl transition-all duration-[0.5s] hover:border-blue-800 hover:shadow-2xl cursor-pointer">
          <div className="p-4 flex-grow">
            <h5 className="mb-2 text-slate-800 text-xl font-semibold">
              Relationship Manager
            </h5>
            <div className='my-5'>
              <p className="text-[15px] sm:text-[17px] leading-relaxed">
                <span className='font-bold  text-[#ff8e2b] text-[17px]'>Job Category : </span> Relationship Manager
              </p>
              <p className="text-[15px] sm:text-[18px] leading-relaxed">
                <span className='font-bold  text-[#ff8e2b] text-[17px]'> Job Type : </span> Full Time
              </p>
              <p className="text-[15px] sm:text-[18px] leading-relaxed">
                <span className='font-bold  text-[#ff8e2b] text-[17px]'>Location : </span> Multan
              </p>
            </div>

          </div>
          <div className="p-4">
            <button className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
              Apply Now
            </button>
          </div>
        </Link>

        {/* Business Development Executive */}
        <Link to="/job/business-development-executive" className="relative flex flex-col bg-white shadow-sm border-slate-200 w-96 h-72 border rounded-2xl transition-all duration-[0.5s] hover:border-blue-800 hover:shadow-2xl cursor-pointer">
          <div className="p-4 flex-grow">
            <h5 className="mb-2 text-slate-800 text-xl font-semibold">
              Business Development Executive (Female)
            </h5>
            <div className='my-5'>
              <p className="text-[15px] sm:text-[16px] leading-relaxed">
                <span className='font-bold  text-[#ff8e2b] text-[17px]'>Job Category : </span> Business Development
              </p>
              <p className="text-[15px] sm:text-[18px] leading-relaxed">
                <span className='font-bold  text-[#ff8e2b] text-[17px]'> Job Type : </span> Full Time
              </p>
              <p className="text-[15px] sm:text-[18px] leading-relaxed">
                <span className='font-bold  text-[#ff8e2b] text-[17px]'>Location : </span> Multan
              </p>
            </div>
          </div>
          <div className="p-4">
            <button className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none " type="button">
              Apply Now
            </button>
          </div>
        </Link>

        {/* Video Host */}
        <Link to="/job/video-host" className="relative flex flex-col bg-white shadow-sm border-slate-200 w-96 h-72 border rounded-2xl transition-all duration-[0.5s] hover:border-blue-800 hover:shadow-2xl cursor-pointer">
          <div className="p-4 flex-grow">
            <h5 className="mb-2 text-slate-800 text-xl font-semibold">
              Video Host ( Female )
            </h5>
            <div className='my-5'>
              <p className="text-[15px] sm:text-[18px] leading-relaxed">
                <span className='font-bold  text-[#ff8e2b] text-[17px]'>Job Category : </span> Video Host
              </p>
              <p className="text-[15px] sm:text-[18px] leading-relaxed">
                <span className='font-bold  text-[#ff8e2b] text-[17px]'>Gender : </span> Female
              </p>
              <p className="text-[15px] sm:text-[18px] leading-relaxed">
                <span className='font-bold  text-[#ff8e2b] text-[17px]'> Job Type : </span> Full Time
              </p>
              <p className="text-[15px] sm:text-[18px] leading-relaxed">
                <span className='font-bold  text-[#ff8e2b] text-[17px]'>Location : </span> Multan
              </p>
            </div>

          </div>
          <div className="p-4">
            <button className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
              Apply Now
            </button>
          </div>
        </Link>

        {/* Sales Team */}
        <Link to="/job/sales-team" className="relative flex flex-col bg-white shadow-sm border-slate-200 w-96 h-72 border rounded-2xl transition-all duration-[0.5s] hover:border-blue-800 hover:shadow-2xl cursor-pointer">
          <div className="p-4 flex-grow">
            <h5 className="mb-2 text-slate-800 text-xl font-semibold">
              Sales Operation Coordinator Team
            </h5>
            <div className='my-5'>
              <p className="text-[15px] sm:text-[18px] leading-relaxed">
                <span className='font-bold  text-[#ff8e2b] text-[17px]'>Job Category : </span> Sales Team
              </p>
              <p className="text-[15px] sm:text-[18px] leading-relaxed">
                <span className='font-bold  text-[#ff8e2b] text-[17px]'> Job Type : </span> Full Time
              </p>
              <p className="text-[15px] sm:text-[18px] leading-relaxed">
                <span className='font-bold  text-[#ff8e2b] text-[17px]'>Location : </span> Multan
              </p>
            </div>
          </div>
          <div className="p-4">
            <button className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
              Apply Now
            </button>
          </div>
        </Link>

      </div>

    </div>
  )
}

export default Career





































