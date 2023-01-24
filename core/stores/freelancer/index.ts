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
    testimonials: (
      payload: z.infer<typeof schemas.freelancer.testimonial>
    ) => void;
    employments: (
      payload: z.infer<typeof schemas.freelancer.employment>
    ) => void;
    educations: (payload: z.infer<typeof schemas.freelancer.education>) => void;
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
    testimonials: (payload) =>
      set((state) => ({
        fields: {
          ...state.fields,
          testimonials: [...state.fields.testimonials, payload],
        },
      })),
    employments: (payload) =>
      set((state) => ({
        fields: {
          ...state.fields,
          employments: [...state.fields.employments, payload],
        },
      })),
    educations: (payload) =>
      set((state) => ({
        fields: {
          ...state.fields,
          educations: [...state.fields.educations, payload],
        },
      })),
  },
  clear: () => set({ fields: initialState }),
}));

export default freelancer;
