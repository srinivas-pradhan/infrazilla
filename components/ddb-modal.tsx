'use client';

import useAppModal  from '@/hooks/use-ddb-modal';
import Modal  from '@/components/ui/modal';
import { Button } from "@/components/ui/button"
 

const DDBModal = () => {
    const AppHookModal = useAppModal();
    return ( 
        <Modal
            title='My Modal'
            description='Testing'
            onClose={AppHookModal.onClose}
            isOpen={AppHookModal.isOpen}
        >
            <div className="float-right space-x-3">
            <Button onClick={AppHookModal.onClose}>Cancel</Button>
            <Button variant="destructive">Submit</Button>
            </div>
            <div></div>
        </Modal>
    );
}
 
export default DDBModal;
