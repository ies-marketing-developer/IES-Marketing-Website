import React, { useState } from 'react'
import { FaWhatsappSquare } from "react-icons/fa";
import whatsappIcon from "../assets/whatsapp icon.webp"
import { useAppContext } from '../Context/AppContext';

const ChatWithWhatsapp = () => {
    const [isHoverOnButton, setIsHoverOnButton] = useState(false)
    const { openLeadpoup } = useAppContext()

    return (
        <a target="_main" href='https://api.whatsapp.com/send/?phone=923338400106&text=Hi+Sir%21+I+am+%3CYour+Name%3E+.+I+am+Interested+in+Real+Estate.+Can+I+get+more+information+about+your+projects.&type=phone_number&app_absent=0'>
            <div className='fixed sm:bottom-[125px] bottom-[100px] right-[8px] sm:right-[25px]' onClick={openLeadpoup}>
                <div className='flex justify-center items-center'>
                    {isHoverOnButton && (
                        <div className='text-[10px] cursor-pointer py-3 px-2 pr-10 bg-white shadow-2xl border rounded-sm transition-all duration-[0.5s] hover:border-blue-800 hover:shadow-2xl '>Chat via Whatsapp</div>
                    )}
                    <img src={whatsappIcon} className='right-5 w-[60px] cursor-pointer hover:scale-[1.06] duration-[0.2s] border-2 border-white rounded-full' onMouseEnter={() => setIsHoverOnButton(true)}
                        onMouseLeave={() => setIsHoverOnButton(false)} />

                </div>
            </div>
        </a>
    )
}

export default ChatWithWhatsapp
