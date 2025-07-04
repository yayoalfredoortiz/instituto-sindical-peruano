import { StateStorage, createJSONStorage } from 'zustand/middleware';

const storageApi: StateStorage = {
  getItem: function (name: string): string | null {
    if (typeof window !== 'undefined') {
      const data = localStorage.getItem(name);
      return data;
    }
    return null; // Devuelve null en el servidor
  },

  setItem: function (name: string, value: string): void {
    if (typeof window !== 'undefined') {
      localStorage.setItem(name, value);
    }
  },

  removeItem: function (name: string): void {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(name);
    }
  },
};

// Crea el almacenamiento personalizado usando `createJSONStorage`
export const customLocalStorage = createJSONStorage(() => storageApi);
