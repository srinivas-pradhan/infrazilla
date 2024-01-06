'use client';

import { useState, useEffect } from "react";

import { InfraModal } from '@/components/infra-modal';

export const InfraModalProvider = () => {
    const [ isMounted, setIsMounted] = useState(false);

    useEffect(()=> {
        setIsMounted(true);
    });

    if(!isMounted){
        return null;
    }
    return (

        <>
            <InfraModal/>
        </>
    );
}
