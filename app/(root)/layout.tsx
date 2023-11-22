import { Prompt } from 'next/font/google';
import ClientOnly from '@/components/ClientOnly';
import NavBar from '@/components/navbar';
import Swipe from '@/components/Swipe';

import { ImageData, SwipeConfig } from '@/utils/swipe';

const inter = Prompt({ 
  weight: '400',
  subsets: ['latin'] 
})

export const metadata = {
  title: 'Infra Zilla',
  description: 'Order AWS Infrastructure using Web UI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientOnly>
            <NavBar/>
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
        </ClientOnly>
        {children}
      </body>
    </html>
  )
}
