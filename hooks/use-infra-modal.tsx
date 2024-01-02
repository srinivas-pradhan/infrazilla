import { create } from "zustand";

interface UseInfraModal {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const UseInfraModal = create<UseInfraModal>((set) => ({
    isOpen: true,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}));
