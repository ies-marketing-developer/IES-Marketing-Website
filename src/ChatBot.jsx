// import React, { useState, useRef, useEffect } from 'react';
// import { MdMessage } from "react-icons/md";
// import { IoPerson } from "react-icons/io5";
// import iesWhiteLogo from "../assets/ies icon.png";
// import { useAppContext } from '../Context/AppContext.jsx';
// import { MdCancel, MdOutlineCancel } from "react-icons/md";
// import { RxCross2 } from "react-icons/rx";
// import iesFavIcon from "../../public/ies fav icon.jpg";
// import { BsThreeDotsVertical } from "react-icons/bs";
// import { FaAngleDown } from "react-icons/fa6";
// import { IoSend } from "react-icons/io5";
// import { io } from 'socket.io-client';

// const socket = io(import.meta.env.VITE_API_URL,);

// const ChatBot = () => {
//     const { isOpenChatBot, setIsOpenChatBot, openChatBot, closeChatBot, userMsg, setUserMsg, allMessages, setAllMessages, uid, fetchUid } = useAppContext();
//     const [isMobile, setIsMobile] = useState(false);
//     const endOfiesMessagesRef = useRef(null);
//     const chatBotRef = useRef(null);
//     const buttonRef = useRef(null);
//     const [isHoverOnButton, setIsHoverOnButton] = useState(false);

//     useEffect(() => {
//         if (!uid) {
//             fetchUid();
//         }

//         if (uid) {
//             socket.emit("connectUser", { uid });
//             console.log("User connected:", uid);

//             // Listen for socket disconnection and emit disconnection event
//             const handleBeforeUnload = () => {
//                 socket.emit("disConnectUser", { uid });
//                 socket.disconnect();
//             };

//             window.addEventListener("beforeunload", handleBeforeUnload);

//             return () => {
//                 // Cleanup on component unmount
//                 socket.emit("disConnectUser", { uid });
//                 socket.disconnect();
//                 window.removeEventListener("beforeunload", handleBeforeUnload);
//             };
//         }
//     }, [uid, fetchUid]);

//     // Set up socket event listener
//     useEffect(() => {
//         const handleAdminMessage = (admindata) => {
//             let serverUid = admindata.uid;
//             let msg = admindata.msg;
//             if (admindata.uid === uid) {
//                 setAllMessages((prevallMessages) => [...prevallMessages, msg]);
//             }
//         };

//         socket.on("adminMessageToUser", handleAdminMessage);

//         // Cleanup listener on component unmount
//         return () => {
//             socket.off("adminMessageToUser", handleAdminMessage);
//         };
//     }, [uid, setAllMessages]); // Depend on uid to re-register listener if uid changes

//     // handle resize
//     useEffect(() => {
//         const handleResize = () => {
//             setIsMobile(window.innerWidth <= 640);
//         };

//         handleResize();
//         window.addEventListener("resize", handleResize);
//         return () => window.removeEventListener("resize", handleResize);
//     }, []);

//     // handle ref
//     useEffect(() => {
//         if (isOpenChatBot && endOfiesMessagesRef.current) {
//             endOfiesMessagesRef.current.scrollIntoView({ behavior: "auto" });
//         }
//     }, [allMessages, isOpenChatBot]);

//     // handle click outside
//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (chatBotRef.current && !chatBotRef.current.contains(event.target) &&
//                 buttonRef.current && !buttonRef.current.contains(event.target)) {
//                 closeChatBot();
//             }
//         };

//         if (isOpenChatBot) {
//             document.addEventListener('mousedown', handleClickOutside);
//         } else {
//             document.removeEventListener('mousedown', handleClickOutside);
//         }

//         return () => {
//             document.removeEventListener('mousedown', handleClickOutside);
//         };
//     }, [isOpenChatBot, closeChatBot]);

//     const handleSendMessage = (e) => {
//         e.preventDefault();

//         if (userMsg.trim()) {
//             const newMessage = {
//                 msg: userMsg,
//                 type: "user",
//                 time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
//                 status: "Delivered"
//             };
//             sendMsgToServer(newMessage);
//             setAllMessages((prevallMessages) => [
//                 ...prevallMessages,
//                 newMessage
//             ]);
//             setUserMsg("");
//         }
//     };

//     const sendMsgToServer = (msg) => {
//         if (!uid) {
//             fetchUid();
//         }
//         socket.emit('clientMessage', { msg, uid });
//     };

//     return (
//         <div className='mt-[100px]'>
//             {isOpenChatBot && (
//                 <div
//                     ref={chatBotRef}
//                     style={{ boxShadow: 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px' }}
//                     className={`fixed ${isMobile ? 'top-0 border-none m-0 pt-0 pl-0  left-0 w-full h-full mt-0' : 'bottom-[calc(4rem+1.5rem)] mt-[10px] right-0 mr-4  h-[94vh] w-[90%] sm:w-[440px] mb-5  rounded-t-[100px]'} bg-white  pr-0 rounded-lg border top-0 border-[#e5e7eb] flex flex-col  shadow-2xl z-50`}
//                 >
//                     <div className={`flex justify-between items-center bg-black text-white flex-row space-y-1.5 py-4 px-3 ${isMobile ? null : " rounded-t-[18px]"}`}>
//                         <div className='flex justify-center items-center gap-5 ml-4'>
//                             <div className='bg-gray-600 rounded-full'>
//                                 <img src={iesFavIcon} alt="" className='border-2 border-white rounded-full w-12' />
//                             </div>
//                             <div>
//                                 <h2 className="font-semibold text-lg tracking-tight">Hi There</h2>
//                                 <p className="text-sm text-white leading-3">Its <span className='font-bold text-[#ff8e2b]'> Developer Ahmad.</span></p>
//                             </div>
//                         </div>
//                         <div className='flex justify-center items-center gap-2 mr-2'>
//                             {/* <BsThreeDotsVertical className='text-gray-300 cursor-pointer text-[25px]' /> */}
//                             <RxCross2 className='text-gray-300 text-[25px] cursor-pointer' onClick={closeChatBot} />
//                         </div>
//                     </div>

//                     <div className={`flex-1 overflow-y-auto overflow-x-hidden px-3 ${isMobile ? 'mt-0' : null}`}>
//                         {allMessages.map((msg, index) => (
//                             <div
//                                 key={index}
//                                 className={`flex flex-col gap-1 my-2 text-sm ${msg.type === "user" ? "self-end items-end" : "self-start items-start"}`}
//                             >
//                                 <div
//                                     className={`flex items-start ${msg.type === "user" ? "justify-end" : "justify-start"} gap-2`}
//                                 >
//                                     <span className={`relative flex shrink-0 justify-center items-center overflow-hidden rounded-full w-8 h-8 ${msg.type === "user" ? "bg-blue-500" : "bg-gray-800"}`}>
//                                         {msg.type === "user" ?
//                                             <IoPerson className='text-white text-[20px]' />
//                                             :
//                                             <img src={iesWhiteLogo} alt="IES" className='w-[20px]' />
//                                         }
//                                     </span>
//                                     <div className={`p-3 rounded-[15px] max-w-[75%] ${msg.type === "user" ? "bg-gray-700 text-white rounded-tr-[0px]" : "bg-gray-200 text-gray-800 rounded-tl-[0px]"}`}>
//                                         <p className="leading-relaxed ">{msg.msg}</p>
//                                         <div className="flex justify-between items-center text-xs mt-1 min-w-[120px]">
//                                             <span className="text-gray-500">{msg.time}</span>
//                                             {msg.type === "user" && <span className="text-white pl-[10px]">{msg.status}</span>}
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                         <div ref={endOfiesMessagesRef} />
//                     </div>

//                     {/* Close button inside the chatbot for mobile screens */}
//                     {isMobile && (
//                         <button
//                             className="absolute top-4 right-4 text-black text-2xl"
//                             onClick={closeChatBot}
//                         >
//                             <RxCross2 />
//                         </button>
//                     )}

//                     {/* Ensure the input and button are visible on mobile screens */}
//                     <div className="flex items-center pt-2 mt-auto w-full">
//                         <form className={`flex items-center justify-center w-full space-x-2 mb-2 px-2 ${isMobile ? "mb-5" : null}`} onSubmit={handleSendMessage}>
//                             <div className='w-full relative flex justify-center items-center gap-2'>
//                                 <input
//                                     className="flex h-10 w-[85%] rounded-md border border-[#7a7a7a] px-3 py-2 text-sm placeholder-[#6b7280] focus:outline-none focus:ring-2 focus:ring-[#000000] disabled:opacity-50 text-[#030712]"
//                                     placeholder="Type your message . . . . . . . ."
//                                     value={userMsg}
//                                     onChange={(e) => setUserMsg(e.target.value)}

//                                 />
//                                 <span className=' inset-y-0 bg-black w-[40px] h-[40px] rounded-full right-4 flex items-center justify-center cursor-pointer' onClick={handleSendMessage}><IoSend className='text-white text-[20px]' /></span>
//                             </div>

//                         </form>
//                     </div>
//                 </div>
//             )}

//             <div className='flex justify-center items-center fixed bottom-4 right-4'>
//                 {isHoverOnButton && (
//                     <div className='text-[10px] z-3 cursor-pointer py-3 px-2 pr-10 bg-white shadow-2xl border rounded-sm transition-all duration-[0.5s] hover:border-blue-800 hover:shadow-2xl mr-1' onClick={openChatBot}>
//                         Chat via Chat Bot
//                     </div>
//                 )}
//                 {!isOpenChatBot ?
//                     <button
//                         ref={buttonRef}
//                         className="inline-flex items-center justify-center font-medium disabled:pointer-events-none disabled:opacity-50 rounded-full w-[61px] h-[61px] bg-black text-white text-[25px] p-0 normal-case leading-5 hover:scale-[1.06] duration-[0.2s] border-2"
//                         type="button"
//                         onClick={() => setIsOpenChatBot(!isOpenChatBot)}
//                         onMouseEnter={() => setIsHoverOnButton(true)}
//                         onMouseLeave={() => setIsHoverOnButton(false)}
//                     >
//                         <MdMessage />
//                     </button>
//                     : <div ref={buttonRef}></div>
//                 }
//             </div>
//         </div>
//     );
// };

// export default ChatBot;
