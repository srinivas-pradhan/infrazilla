'use client';

import { useState, useEffect } from "react";


const AccountDetails = () => {
    return (
        <div className="
            box-border
            border-1
            h-96
            w-96
            justify-center
            items-center 
            cursor-pointer 
            group 
            bg-transparent 
            perspective
            rounded-3xl
            "
        >
            <div className="relative 
                preserve-3d 
                group-hover:my-rotate-y-180 
                duration-1000
                h-96
                w-96
                "
            >
                <div className="absolute 
                    backface-hidden 
                    h-96
                    w-96
                "
                >
                    <img src="/slider2.jpg" className="w-96 h-96 rounded-3xl" />                                               
                </div>
                <div className="absolute 
                    my-rotate-y-180 
                    backface-hidden 
                    h-96
                    w-96
                    bg-gray-100 
                    overflow-hidden
                    rounded-3xl
                    "
                >
                    <div className="text-center 
                        flex 
                        flex-col 
                        items-center 
                        justify-center 
                        h-full 
                        px-2 
                        pb-24
                        text-gray-800 
                        "
                    >
                        <h1 className="text-3xl font-semibold">The King's Man</h1>
                        <p className="my-2">9.0 Rating</p>
                        <button
                            className="bg-teal-500 px-6 py-2 font-semibold text-white rounded-full absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-5 scale-0 group-hover:scale-125"
                        >
                            Watch Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default AccountDetails;
