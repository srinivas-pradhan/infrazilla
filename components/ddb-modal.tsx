'use client';

import useDdbModal  from '@/hooks/use-ddb-modal';
import Modal  from '@/components/ui/modal';
import { Button } from "@/components/ui/button";
 

const DDBModal = () => {
    const DDBHookModal = useDdbModal();
    return ( 
        <Modal
            title='AWS DynamoDB'
            description='Managed NoSQL database service.'
            onClose={DDBHookModal.onClose}
            isOpen={DDBHookModal.isOpen}
        >
            <div className="float-right space-x-3">
                <Button variant='outline' onClick={DDBHookModal.onClose}>Cancel</Button>
                <Button disabled variant="default">Submit</Button>
            </div>
        </Modal>
    );
}
 
export default DDBModal;
