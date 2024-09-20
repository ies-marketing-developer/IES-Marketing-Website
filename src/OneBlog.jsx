import React, { useState } from 'react';
import { AiFillTikTok } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import instagram from "../assets/instagram_logo.png"
import Blogs from './Blogs';
import { useAppContext } from '../Context/AppContext.jsx';
import { useParams } from 'react-router-dom';

const OneBlog = () => {
    const { id } = useParams();
    const { blogsData } = useAppContext();

    // filter blog from all blogs
    const blog = blogsData.filter((blog) => blog.id === Number(id))
    // console.log("blog[0].paragraphs", blog[0].paragraphs)

    return (
        <div className='bg-white'>
            {/* component */}
            <div className="max-w-screen-lg mx-auto">

                <main className="mt-10">
                    <div className="mb-4 md:mb-0 w-full mx-auto relative">
                        <div className="px-4 py-2 sm:py-8 lg:px-0">
                            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 leading-tight">
                                {blog[0].title}
                            </h2>

                        </div>
                        <img
                            src={blog[0].imgSrc}
                            className="w-full object-cover lg:rounded"
                            style={{ height: '28em' }}
                            alt="Blog"
                        />
                    </div>

                    <div className="flex flex-col lg:flex-row lg:space-x-12 text-justify">
                        <div className="px-4 lg:px-0 mt-12 text-gray-700 text-lg leading-relaxed w-full lg:w-3/4">

                            {blog[0].paragraphs.map((paragraph, index) => {
                                return (
                                    <>
                                        {index !== 2 ? <p className="pb-6">{paragraph}</p> : null}
                                        {index === 2 ? <div className="border-l-4 border-gray-500 pl-4 mb-6 italic rounded">{paragraph}</div> : null}
                                        {index === 3 ? <h2 className="text-2xl text-gray-800 font-semibold mb-4 mt-4">{blog[0].title2}</h2> : null}
                                    </>
                                )
                            })}

                            {/* <div className="border-l-4 border-gray-500 pl-4 mb-6 italic rounded">
                                Sportsman do offending supported extremity breakfast by listening. Decisively advantages nor
                                expression
                                unpleasing she led met. Estate was tended ten boy nearer seemed. As so seeing latter he should thirty whence.
                                Steepest speaking up attended it as. Made neat an on be gave show snug tore.
                            </div> */}

                            {/* <h2 className="text-2xl text-gray-800 font-semibold mb-4 mt-4">Uneasy barton seeing remark happen his has</h2> */}
                        </div>

                        {/* Social Media Accounts */}
                        <div className="w-full lg:w-1/4 m-auto mt-12 max-w-screen-sm">
                            {/* Tiktok */}
                            <div className="p-4 my-3 border-t border-1 border-gray-500 md:border md:rounded">
                                <div className="flex py-2">
                                    <a href="https://www.tiktok.com/@iesmarketing.pk?_t=8oyUKEarCXC&_r=1" target='main'>
                                        <AiFillTikTok className='h-10 w-10 mr-2 object-cover cursor-pointer hover:scale-[1.05] duration-200' />
                                    </a>
                                    <div>
                                        <p className="font-semibold text-gray-700 text-sm">IES Marketing</p>
                                        <p className="font-semibold text-gray-600 text-xs">Tiktok</p>
                                    </div>
                                </div>
                                <p className="text-gray-700 py-3">
                                    Get the latest real estate tips, property tours, and market updates from <span className='font-bold'>IES Marketing </span>. Don’t miss out—follow us today!
                                </p>
                                <a href='https://www.tiktok.com/@iesmarketing.pk?_t=8oyUKEarCXC&_r=1' target='main' className="px-2 py-1  bg-white text-black hover:text-white border-black border-2 hover:bg-black duration-300 flex w-full items-center justify-center rounded">
                                    Follow
                                    <i className="bx bx-user-plus ml-2"></i>
                                </a>

                            </div>
                            {/* Facebook */}
                            <div className="p-4 my-3 border-t border-1 border-gray-500 md:border md:rounded">
                                <div className="flex py-2">
                                    <a href="https://www.facebook.com/share/JKwx1hN9wN9jYdxc/?mibextid=qi2Omg" target='main'>
                                        <FaFacebookSquare className='h-10 w-10 text-blue-500 mr-2 object-cover cursor-pointer  hover:scale-[1.05] duration-200' />
                                    </a>
                                    <div>
                                        <p className="font-semibold text-gray-700 text-sm">IES Marketing</p>
                                        <p className="font-semibold text-gray-600 text-xs">Facebook</p>
                                    </div>
                                </div>
                                <p className="text-gray-700 py-3">
                                    Get the latest real estate tips, property tours, and market updates from <span className='font-bold'>IES Marketing </span>. Don’t miss out—follow us today!
                                </p>
                                <a href='https://www.facebook.com/share/JKwx1hN9wN9jYdxc/?mibextid=qi2Omg' target='main' className="px-2 py-1  bg-white text-blue-500 hover:text-white border-blue-500 border-2 hover:bg-blue-500 duration-300 flex w-full items-center justify-center rounded">
                                    Follow
                                    <i className="bx bx-user-plus ml-2"></i>
                                </a>
                            </div>
                            {/* Youtube */}
                            <div className="p-4 my-3 border-t border-1 border-gray-500 md:border md:rounded">
                                <div className="flex py-2">
                                    <a href="https://www.youtube.com/@iesmarketing01?sub_confirmation=1" target='main'>
                                        <FaYoutube className='h-10 w-10 mr-2 text-red-500 object-cover cursor-pointer  hover:scale-[1.05] duration-200' />
                                    </a>
                                    <div>
                                        <p className="font-semibold text-gray-700 text-sm">IES Marketing</p>
                                        <p className="font-semibold text-gray-600 text-xs">YouTube</p>
                                    </div>
                                </div>
                                <p className="text-gray-700 py-3">
                                    Get the latest real estate tips, property tours, and market updates from <span className='font-bold'>IES Marketing </span>. Don’t miss out—follow us today!
                                </p>
                                <a href='https://www.youtube.com/@iesmarketing01?sub_confirmation=1' target='main' className="px-2 py-1  bg-white text-red-500 hover:text-white border-red-500 border-2 hover:bg-red-500 duration-300 flex w-full items-center justify-center rounded">
                                    Subscribe
                                    <i className="bx bx-user-plus ml-2"></i>
                                </a>
                            </div>
                            {/* Instagram */}
                            <div className="p-4 my-3 border-t border-1 border-gray-500 md:border md:rounded">
                                <div className="flex py-2">
                                    <a href="https://www.instagram.com/iesmarketing.pk?igsh=MTgyaXIwMHZhaXR1" target='main'>
                                        <img src={instagram} className='h-10 w-10 mr-2 object-cover cursor-pointer  hover:scale-[1.05] duration-200' />
                                    </a>
                                    <div>
                                        <p className="font-semibold text-gray-700 text-sm">IES Marketing</p>
                                        <p className="font-semibold text-gray-600 text-xs">Instagram</p>
                                    </div>
                                </div>
                                <p className="text-gray-700 py-3">
                                    Get the latest real estate tips, property tours, and market updates from <span className='font-bold'>IES Marketing </span>. Don’t miss out—follow us today!
                                </p>
                                <a href='https://www.instagram.com/iesmarketing.pk?igsh=MTgyaXIwMHZhaXR1' target='main' className="px-2 py-1 text-pink-500 border-2 border-transparent flex w-full items-center justify-center rounded transition duration-300 ease-in-out bg-white hover:bg-gradient-to-r hover:from-purple-500 hover:via-pink-500 hover:to-orange-500 hover:text-white" style={{
                                    borderImage: 'linear-gradient(to right, #6a11cb, #ff5f6d, #fcb045) 1'
                                }}>
                                    Follow
                                    <i className="bx bx-user-plus ml-2"></i>
                                </a>

                            </div>
                        </div>
                    </div>
                </main>
            </div>
            <Blogs />
        </div>
    );
};

export default OneBlog;
