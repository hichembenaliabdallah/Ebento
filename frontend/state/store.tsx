import { create } from "zustand";

interface GenerationState {
  isLogged: boolean;
}

export const useGenerationStore = create<GenerationState>()(() => ({
  isLogged: false,
}));
