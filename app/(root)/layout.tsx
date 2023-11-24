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
            <NavBar
              width_div="w-full"
              navbarstyle="bg-slate-200 shadow-sm flex h-16 items-center px-8"
              logo_styling="font-mono text-2xl font-semibold scale-150"
              dropdown="ml-auto flex flex-row items-center"
              navbarspacing="gap-48 px-24"
              dropdown_menustyling="font-mono bg-slate-200 hover:bg-slate-100 text-gray-600 hover:text-gray-900 text-md"
              navbaritemstyle="cursor-pointer font-mono text-gray-600 hover:text-gray-900 text-md"
              useraccountstyle="cursor-pointer font-mono text-gray-600 hover:text-gray-900 text-md"
            />
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
