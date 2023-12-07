'use client';

import { useEffect, useState } from "react";

import AppModal from "@/components/app-modal";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <AppModal />
    </>
  );
}

export default ModalProvider;
