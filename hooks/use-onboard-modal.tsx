import { create } from 'zustand';

interface useonBoardModal {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const useonBoardModal = create<useonBoardModal>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}));
 
export default useonBoardModal;
