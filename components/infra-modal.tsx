'use client';
import { useRouter } from 'next/navigation';

import Modal from '@/components/ui/modal';
import UseInfraModal from '@/hooks/use-infra-modal';

import { useToast } from "@/components/ui/use-toast";


export const InfraModal = () => {
    const InfraModal = UseInfraModal();
    const { toast } = useToast();
    const router = useRouter();

    return ( 
        <Modal
        title="Select AWS Account"
        description="To start working with all deployed resources in that account."
        isOpen={InfraModal.isOpen}
        onClose={() => { router.push('/') }}
        />
     );
}
