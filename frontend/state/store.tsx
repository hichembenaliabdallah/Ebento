import { create } from "zustand";

interface GenerationState {
  user: any;

  setUser: (user: any) => void;
}

const useAuthStore = create<GenerationState>((set) => ({
  user: null,

  setUser: (user: any) => set({ user }),
}));

export default useAuthStore;
