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
        {children}
      </>
    );
}
