import { create } from 'zustand';

interface useDdbModal {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const useDdbModal = create<useAppModal>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}));
 
export default useDdbModal;
