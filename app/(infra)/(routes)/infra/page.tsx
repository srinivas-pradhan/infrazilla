import { redirect } from 'next/navigation';
import { auth } from '@clerk/nextjs';

import Navbar from '@/components/navbar'


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
        {children}
      </>
    );
}
