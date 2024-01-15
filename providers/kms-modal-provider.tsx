'use client';

import { useState, useEffect } from "react";

import { KMSModal } from "@/components/kms-modal";

export const KMSModalProvider = () => {
    const [ isMounted, setIsMounted] = useState(false);

    useEffect(()=> {
        setIsMounted(true);
    });

    if(!isMounted){
        return null;
    }
    return (

        <>
            <KMSModal/>
        </>
    );
}
