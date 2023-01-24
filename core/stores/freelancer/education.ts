import schemas from "@core/validations/schemas";
import { ChangeEvent } from "react";
import { z } from "zod";
import { create } from "zustand";

type Education = {
  fields: z.infer<typeof schemas.freelancer.education>;
  setFields: {
    school: (payload: ChangeEvent<HTMLInputElement>) => void;
    degree: (payload: { id: string; name: string }) => void;
    area: (payload: { id: string; name: string }) => void;
    from: (payload: { id: string; name: string }) => void;
    to: (payload: { id: string; name: string }) => void;
  };
  clear: () => void;
};

const initialState = {
  school: "",
  degree: { id: "", name: "" },
  area: { id: "", name: "" },
  from: { id: "", name: "" },
  to: { id: "", name: "" },
};

const education = create<Education>((set) => ({
  fields: initialState,
  setFields: {
    school: (payload) =>
      set((state) => ({
        fields: { ...state.fields, school: payload.target.value },
      })),
    degree: (payload) =>
      set((state) => ({
        fields: { ...state.fields, degree: payload },
      })),
    area: (payload) =>
      set((state) => ({
        fields: { ...state.fields, area: payload },
      })),
    from: (payload) =>
      set((state) => ({
        fields: { ...state.fields, from: payload },
      })),
    to: (payload) =>
      set((state) => ({
        fields: { ...state.fields, to: payload },
      })),
  },
  clear: () => set({ fields: initialState }),
}));

export default education;
