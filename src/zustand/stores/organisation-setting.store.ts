import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { OrganisationSetting } from '../interfaces/organisation-setting.interface';
import { OrganisationSettingService } from '../services/organisation-setting.service';

interface OrganisationSettingState {
  data: OrganisationSetting | null;
  loading: boolean;
  error: boolean;
  loaded: boolean; // ✅ nuevo flag
  get: () => Promise<OrganisationSetting | null>;
}

export const useOrganisationSettingStore = create<OrganisationSettingState>()(
  devtools((set, get) => ({
    data: null,
    loading: false,
    error: false,
    loaded: false, // ✅ inicialización

    get: async () => {
      if (get().loaded) return get().data; // ✅ evita recarga si ya se cargó

      set({ loading: true, error: false });
      try {
        const data = await OrganisationSettingService.get();
        set({ data, loading: false, loaded: true }); // ✅ marcar como cargado
        return data;
      } catch (error) {
        set({ error: true, loading: false, loaded: false });
        throw error;
      }
    },
  }))
);
