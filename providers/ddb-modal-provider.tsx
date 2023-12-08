'use client';

import { useEffect, useState } from "react";

import DDBModal from "@/components/ddb-modal";

export const DDBProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <DDBModal />
    </>
  );
}

export default DDBProvider;
