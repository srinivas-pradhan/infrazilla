import { redirect } from 'next/navigation';
import { auth } from '@clerk/nextjs';

import { Prompt } from 'next/font/google';
import ClientOnly from '@/components/ClientOnly';
import NavBar from '@/components/navbar';
import AccountDetails from '@/app/(dashboard)/dashboard/[account]/components/account-details';

const inter = Prompt({ 
  weight: '400',
  subsets: ['latin'] 
})

export const metadata = {
  title: 'Infra Zilla',
  description: 'Order AWS Infrastructure using Web UI',
}

export default function AccountPage ({
    children,
    params
} : {
    children: React.ReactNode,
    params: { account: string }
  })
  {
    const { userId } = auth();

    if (!userId) {
      redirect('/sign-in');
    }

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
            <div className=" grid grid-cols-3 gap-20 p-10">
              <div className="bg-transparent cursor-pointer group perspective">
                <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                  <div className="absolute backface-hidden border-2 w-full h-full">
                  <img src="/slider2.jpg" className="w-full h-full" />
                  </div>
                  <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 overflow-hidden">
                    <div className="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24">
                      <h1 className="text-3xl font-semibold">The King's Man</h1>
                      <p className="my-2">9.0 Rating</p>
                      <button
                        className="bg-teal-500 px-6 py-2 font-semibold text-white rounded-full absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-20 scale-0 group-hover:scale-125"
                      >
                        Watch Now
                      </button>
                    </div>
                  </div>
                </div>
            </div> 
    
              {/* <div>
                <AccountDetails/>
              </div> */}
              <div>
                <AccountDetails/>
              </div>
              <div>
                <AccountDetails/>
              </div>
              <div>
                <AccountDetails/>
              </div>
              <div>
                <AccountDetails/>
              </div>
              <div>
                <AccountDetails/>
              </div>
            </div>
        </ClientOnly>
        {children}
      </body>
    </html>
    );
}
