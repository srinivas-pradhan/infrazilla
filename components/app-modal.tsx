'use client';

import useAppModal  from '@/hooks/use-app-modal';
import Modal  from '@/components/ui/modal';

const AppModal = () => {
    const AppHookModal = useAppModal();
    return ( 
        <Modal
            title='My Modal'
            description='Testing'
            onClose={AppHookModal.onClose}
            isOpen={AppHookModal.isOpen}
        >
            <div></div>
        </Modal>
    );
}
 
export default AppModal;
