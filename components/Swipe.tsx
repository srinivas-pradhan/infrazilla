'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';

// Add Interface and pass values for the functionality 
// Read a file and pass contents of that file in the interface \
// Those structured contents will be used as a map to remove the code repeatability

interface SwipeProps {
    imagedata: Array<{alt: string, src: string}>;
    mousewheel: boolean;
    dynamicBullets: boolean;
    clickable: boolean;
    delay: string;
    disableOnInteraction: boolean;
    spaceBetween: number;
    slidesPerView: number;
    loop: boolean;
}
const Swipe:React.FC<SwipeProps> = ({
    imagedata,
    mousewheel,
    dynamicBullets,
    clickable,
    delay,
    disableOnInteraction,
    spaceBetween,
    slidesPerView,
    loop
}) => {
    return (  
        <div className="bg-white px-32 flex justify-center">
            <Swiper
                className="rounded-2xl"
                modules={[Mousewheel, Autoplay, Pagination]}
                mousewheel={mousewheel}
                pagination={{
                    dynamicBullets: {dynamicBullets},
                    clickable: {clickable},
                }}
                autoplay={{
                    delay: "30000",
                    disableOnInteraction: {disableOnInteraction},
                  }}
                spaceBetween={spaceBetween}
                slidesPerView={slidesPerView}
                loop={loop}
            >
                {imagedata.map((item) => (
                    <SwiperSlide>
                        <Image 
                            alt={item.alt}
                            priority
                            className="rounded-2xl h-[400px] w-full"
                            height={1500}
                            width={1500}
                            src={item.src}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
 
export default Swipe;
