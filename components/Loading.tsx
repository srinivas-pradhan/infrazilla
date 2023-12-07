'use client';

import useLoadingModal from '@/hooks/use-loading-modal';

// Add Interface
// If the boolean value for onChange using hooks state change is false - add conditional for tailwindcss to hide the loading box. 
export const Loading = () => {
    const LoadingModal = useLoadingModal();

    return ( 
        <div className="bg-white px-32 flex flex-grow justify-center">
            <div className="box-border border-4 w-36 h-45 bg-white rounded-xl p-6 space-y-6">
                <div className="
                    items-center 
                    p-2
                    bg-gray-100 
                    rounded-full
                    border-4
                    border-gray-300 
                    shadow-lg
                    drop-shadow-2xl
                    opacity-100
                    animate-bounce 
                    transition 
                    ease-in-out 
                    duration-1000
                    delay-0
                ">

                </div>
                <div className="
                    items-center 
                    p-2
                    bg-gray-100 
                    rounded-full 
                    border-4
                    border-gray-300
                    shadow-lg
                    drop-shadow-2xl
                    opacity-100
                    animate-bounce 
                    transition 
                    ease-in-out 
                    duration-1000
                    delay-100
                ">

                </div>
                <div className="
                    items-center 
                    p-2
                    bg-gray-100 
                    rounded-full 
                    border-4
                    border-gray-300
                    shadow-lg
                    drop-shadow-2xl
                    opacity-100
                    animate-bounce 
                    transition 
                    ease-in-out 
                    duration-1000
                    delay-200
                ">

                </div>
            </div>
        </div>
     );
}
