import React, { useState, useRef, useEffect } from 'react';
import { RxCross2 } from "react-icons/rx";
import { useAppContext } from '../Context/AppContext';
import { Howl } from 'howler'; // Import Howler
import "./CSS/LeadsPoup.css";
import toast from 'react-hot-toast';

const LeadsPoup = () => {
    const { closeLeadpoup, isLeadPoupOpen } = useAppContext();
    const popupRef = useRef(null);
    const [shakePopup, setShakePopup] = useState(false);
    const [name, setName] = useState('');
    const [contact, setContact] = useState('');

    // Function to play the sound using Howler
    const playSound = () => {
        const sound = new Howl({
            src: ['/path-to-your-sound.mp3'], // Replace with your sound file path
            volume: 0.5, // Adjust the volume as needed
        });
        sound.play();
    };

    useEffect(() => {
        // Function to handle clicks outside the popup
        const handleClickOutside = (event) => {
            if (popupRef.current && !popupRef.current.contains(event.target)) {
                // Shake the popup and play sound
                setShakePopup(true);
                playSound(); // Play the sound when user clicks outside

                // Remove the shake class after the animation is complete
                setTimeout(() => {
                    setShakePopup(false);
                }, 500); // Adjust the duration based on your animation duration
            }
        };

        // Add event listener when popup is open
        if (isLeadPoupOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        // Clean up the event listener when the component is unmounted or popup is closed
        return () => {
            if (isLeadPoupOpen) {
                document.removeEventListener('mousedown', handleClickOutside);
            }
        };
    }, [isLeadPoupOpen]);

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior

        // Construct the data object
        const data = {
            name: name,
            contact: contact
        };

        try {
            // Send data to the Google Apps Script endpoint
            closeLeadpoup()
            const response = await fetch("https://script.google.com/macros/s/AKfycbwxIZpciq3ORlyV55WUEhvL2ab5sZjCOvn1MWPtBKtJ7ygYP230BeGngTfoYByn8COG/exec", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: new URLSearchParams(data).toString() // Convert data object to URL-encoded string
            });

            // Check if the request was successful
            if (response.ok) {
                // If successful, handle the response (e.g., show a success message)
                const result = await response.text(); // You can also use response.json() if you expect JSON
                console.log(result); // For debugging
                // Optionally, clear the form fields after successful submission
                setName('');
                setContact('');
                toast.success("Submit Successfully")
                closeLeadpoup()
            } else {
                // Handle errors
                console.error('Error:', response.statusText);
            }
        } catch (error) {
            // Handle any other errors (e.g., network issues)
            console.error('Error:', error);
        }
    };

    return (
        isLeadPoupOpen ?
            <div className='w-full h-[100vh] fixed flex justify-center items-center z-[10000000000] bg-transparent'>
                <div className='flex justify-center bg-blue-700 max-w-full max-h-full fixed'>
                    <div className='w-10 '></div>
                </div>

                <div
                    ref={popupRef}
                    className={`w-[90vw] max-w-[400px] h-[80vh] max-h-[300px] bg-white shadow-2xl fixed mx-auto mt-20 z-[10000000000000000] px-3 hover:border-[1px] rounded-2xl transition-all duration-[0.5s] hover:border-gray-900 hover:shadow-2xl ${shakePopup ? 'shake' : ''}`}
                >
                    <RxCross2 className='text-[30px] text-black relative float-right cursor-pointer -mr-2 mt-1' onClick={closeLeadpoup} />

                    <form className="space-y-4 md:space-y-6 pt-8" onSubmit={handleSubmit}>
                        <p className='text-xl font-bold text-center'>User Details</p>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="bg-gray-50 border rounded-full border-gray-800 text-gray-900 focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                            placeholder="Enter your name ...."
                            required
                        />
                        <input
                            type="number"
                            value={contact}
                            onChange={(e) => setContact(e.target.value)}
                            className="bg-gray-50 border rounded-full border-gray-800 text-gray-900 focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                            placeholder="Enter your contact no ...."
                            required
                        />
                        <button
                            type="submit"
                            className="block bg-white text-black border-2 border-black px-4 py-2 rounded-full text-center bg-black-800 hover:bg-black hover:text-white hover:bg-black-900 transition duration-[0.5s] w-full"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
            :
            null
    );
};

export default LeadsPoup;
