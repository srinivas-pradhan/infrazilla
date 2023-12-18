'use client';

import { useState, useEffect } from "react";

import { OnboardModal } from "@/components/onboard-modal";

export const OnboardModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if(!isMounted) {
        return null;
    }

    return ( 
        <>
            <OnboardModal />
        </>
    );
}
 
