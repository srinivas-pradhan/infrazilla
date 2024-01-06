import { redirect } from 'next/navigation';
import { auth } from '@clerk/nextjs';

import Navbar from '@/components/navbar'
import { InfraModal } from '@/components/infra-modal';

export default function InfraLayout ({
    children
} : {
    children: React.ReactNode
  })
  {
    const { userId } = auth();

    if (!userId) {
      redirect('/sign-in');
    }

    return (
      <>
        <Navbar
          width_div="w-full"
          navbarstyle="bg-slate-200 shadow-sm flex h-16 items-center px-8"
          logo_styling="font-mono text-2xl font-semibold scale-150"
          dropdown="ml-auto flex flex-row items-center"
          navbarspacing="gap-48 px-24"
          dropdown_menustyling="font-mono bg-slate-200 hover:bg-slate-100 text-gray-600 hover:text-gray-900 text-md"
          navbaritemstyle="cursor-pointer font-mono text-gray-600 hover:text-gray-900 text-md"
          useraccountstyle="cursor-pointer font-mono text-gray-600 hover:text-gray-900 text-md"
        />
        <InfraModal/>
        {children}
      </>
    );
}
