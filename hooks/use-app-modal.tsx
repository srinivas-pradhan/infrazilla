import { create } from 'zustand';

interface useAppModal {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const useAppModal = create<useAppModal>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}));
 
export default useAppModal;
