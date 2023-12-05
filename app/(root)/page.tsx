'use client';

import { useEffect } from 'react';
import { useParams } from 'next/navigation';

import useAppModal  from '@/hooks/use-app-modal';

const HomePage = () => {
  const onOpen = useAppModal((state: { onOpen: any; }) => state.onOpen);
  const isOpen = useAppModal((state: { isOpen: any; }) => state.isOpen);
  
  useEffect(() => {
    if (!onOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);
  
  return null;
}
 
export default HomePage;

