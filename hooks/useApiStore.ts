import { create } from "zustand";

interface ApiStore {
  apiUrl: string | null;
  setApiUrl: (url: string) => void;
  clearApiUrl: () => void;
}

export const useApiStore = create<ApiStore>((set) => {
    const apiUrl =
        typeof window !== "undefined" ? localStorage.getItem("apiUrl") : null;

    return {
        apiUrl: apiUrl, 
        setApiUrl: (url: string) => {
        if (typeof window !== "undefined") {
            localStorage.setItem("apiUrl", url); 
            set({ apiUrl: url }); 
        }
        },
        clearApiUrl: () => {
        if (typeof window !== "undefined") {
            localStorage.removeItem("apiUrl"); 
            set({ apiUrl: null });
        }
        },
    };
});
