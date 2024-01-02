'use client';

import Modal from '@/components/ui/modal';
import UseInfraModal from '@/hooks/use-infra-modal';

import { useToast } from "@/components/ui/use-toast";


export const InfraModal = () => {
    const InfraModal = UseInfraModal();
    const { toast } = useToast();

    return ( 
        <Modal
        title="Select AWS Account"
        description="To start working with all deployed resources in that account."
        isOpen={InfraModal.isOpen}
        onClose={() => {
            InfraModal.onClose();
            toast({
                title: "Select AWS Account.",
                description: "Action - Cancelled.",
            })
        }}
        />
     );
}
 
