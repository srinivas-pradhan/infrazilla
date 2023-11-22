'use client';

// When using this component for loading - then place in center and blur screen

const Loading = () => {
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
 
export default Loading;
