'use client';

import Modal from "./ui/modal";
import UseKMSModal from "@/hooks/use-kms-modal";
import { useToast } from "@/components/ui/use-toast";


export const KMSModal = () => {
    const KMS = UseKMSModal();
    const { toast } = useToast();
    return ( 
        <Modal
            title="Create a KMS Key"
            description="This action is is only performed on Onboarded Accounts"
            isOpen={KMS.isOpen}
            onClose={() => {
                KMS.onClose();
                toast({
                    title: "AWS Key Management Service.",
                    description: "Cancelled.",
                })
            }}
        />
    );
}
 
