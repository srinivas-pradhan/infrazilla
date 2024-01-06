'use client';

import Swipe from '@/components/Swipe';

export const SwiperProvider = () => {
    return ( 
        <>
            <Swipe
                imagedata={ImageData}
                mousewheel={SwipeConfig.mousewheel}
                dynamicBullets={SwipeConfig.dynamicBullets}
                clickable={SwipeConfig.clickable}
                delay={SwipeConfig.delay}
                disableOnInteraction={SwipeConfig.disableOnInteraction}
                spaceBetween={SwipeConfig.spaceBetween}
                slidesPerView={SwipeConfig.slidesPerView}
                loop={SwipeConfig.loop}
            />
        </>
    );
}
