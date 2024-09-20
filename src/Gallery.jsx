import React, { useState } from 'react';
import img1 from "../assets/SmartHousing.jpg";
import img2 from "../assets/smarthousing2.jpg";
import img3 from "../assets/smarthousing3.jpg";
import img4 from "../assets/smarthousing4.jpg";
import img5 from "../assets/smarthousing5.jpg";
import img6 from "../assets/smarthousing6.jpg";
import img7 from "../assets/smarthousing7.jpg";
import img8 from "../assets/smarthousing8.jpg";
import img9 from "../assets/smarthousing9.jpg";
import img11 from "../assets/royal orchad 1.jpg";
import img12 from "../assets/royal orchad 2.jpg";
import img13 from "../assets/royal orchad 4.jpg";
import img14 from "../assets/DHA 2.jpg";
import img15 from "../assets/smarthousing10.jpg";
import img16 from "../assets/DHA 3.jpg";
import img17 from "../assets/DHA 6.jpg";
import img18 from "../assets/AdamsHousing1.jpg";
import img19 from "../assets/AdamsHousing2.jpg";
import loader from "../assets/loader.gif";

const Gallery = () => {
    // Array of image paths
    const images = [
        img1, img2, img3, img4, img5, img6, img7, img8, img9,
        img11, img12, img13, img14, img15, img16, img17, img18, img19,
    ];

    // Array to hold the loading state for each image
    const [loading, setLoading] = useState(Array(images.length).fill(true));

    // Handle image load
    const handleImageLoad = (index) => {
        setLoading((prevLoading) => {
            const newLoading = [...prevLoading];
            newLoading[index] = false; // Set the loading state to false when the image is loaded
            return newLoading;
        });
    };

    return (
        <div>
            <section className='mb-12'>
                <h3 className="text-3xl font-bold mb-4 text-center pb-4 mt-[120px]">Images Of societies</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {images.map((src, index) => (
                        <div
                            key={index}
                            className="w-full h-48 md:h-64 lg:h-80 bg-gray-200 flex items-center justify-center overflow-hidden border rounded-2xl transition-all duration-[0.5s] hover:border-blue-800 hover:shadow-2xl"
                        >
                            {/* Show loader if the image is still loading */}
                            {loading[index] && (
                                <img
                                    src={loader}
                                    alt="Loading..."
                                    className="w-28 h-28 object-contain"
                                />
                            )}
                            <img
                                className={`max-w-full max-h-full object-contain ${loading[index] ? 'hidden' : 'block'}`}
                                src={src}
                                alt={`Gallery image ${index + 1}`}
                                onLoad={() => handleImageLoad(index)}
                                onError={() => handleImageLoad(index)}
                            />
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Gallery;
