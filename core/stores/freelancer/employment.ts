import schemas from "@core/validations/schemas";
import { ChangeEvent } from "react";
import { z } from "zod";
import { create } from "zustand";

type Employment = {
  fields: z.infer<typeof schemas.freelancer.employment>;
  setFields: {
    company: (payload: ChangeEvent<HTMLInputElement>) => void;
    position: (payload: ChangeEvent<HTMLInputElement>) => void;
    description: (payload: ChangeEvent<HTMLTextAreaElement>) => void;
    location: (payload: ChangeEvent<HTMLInputElement>) => void;
    from: (payload: { id: string; name: string }) => void;
    to: (payload: { id: string; name: string }) => void;
    isActive: (payload: ChangeEvent<HTMLInputElement>) => void;
  };
  clear: () => void;
};

const initialState = {
  company: "",
  position: "",
  description: "",
  location: "",
  from: { id: "", name: "" },
  to: { id: "", name: "" },
  isActive: false,
};

const employment = create<Employment>((set) => ({
  fields: initialState,
  setFields: {
    company: (payload) =>
      set((state) => ({
        fields: { ...state.fields, company: payload.target.value },
      })),
    position: (payload) =>
      set((state) => ({
        fields: { ...state.fields, position: payload.target.value },
      })),
    description: (payload) =>
      set((state) => ({
        fields: { ...state.fields, description: payload.target.value },
      })),
    location: (payload) =>
      set((state) => ({
        fields: { ...state.fields, location: payload.target.value },
      })),
    from: (payload) =>
      set((state) => ({
        fields: { ...state.fields, from: payload },
      })),
    to: (payload) =>
      set((state) => ({
        fields: { ...state.fields, to: payload },
      })),
    isActive: (payload) =>
      set((state) => ({
        fields: { ...state.fields, isActive: payload.target.checked },
      })),
  },
  clear: () => set({ fields: initialState }),
}));

export default employment;
