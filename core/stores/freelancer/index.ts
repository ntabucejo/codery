import schemas from "@core/validations/schemas";
import { ChangeEvent } from "react";
import { z } from "zod";
import { create } from "zustand";

type Freelancer = {
  fields: z.infer<typeof schemas.freelancer.base>;
  setFields: {
    biography: (payload: ChangeEvent<HTMLTextAreaElement>) => void;
    location: (payload: ChangeEvent<HTMLInputElement>) => void;
    phone: (payload: ChangeEvent<HTMLInputElement>) => void;
    skills: (payload: { id: string; name: string }) => void;
    testimonials: () => void;
    employments: () => void;
    educations: () => void;
  };
  clear: () => void;
};

const initialState = {
  biography: "",
  location: "",
  phone: "",
  skills: [],
  testimonials: [],
  employments: [],
  educations: [],
};

const freelancer = create<Freelancer>((set) => ({
  fields: initialState,
  setFields: {
    biography: (payload) =>
      set((state) => ({
        fields: { ...state.fields, biography: payload.target.value },
      })),
    location: (payload) =>
      set((state) => ({
        fields: { ...state.fields, location: payload.target.value },
      })),
    phone: (payload) =>
      set((state) => ({
        fields: { ...state.fields, phone: payload.target.value },
      })),
    skills: (payload) =>
      set((state) => ({
        fields: {
          ...state.fields,
          skills: [...state.fields.skills, payload],
        },
      })),
    testimonials: () => {},
    employments: () => {},
    educations: () => {},
  },
  clear: () => set({ fields: initialState }),
}));

export default freelancer;
