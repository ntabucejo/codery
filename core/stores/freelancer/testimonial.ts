import schemas from "@core/validations/schemas";
import { ChangeEvent } from "react";
import { z } from "zod";
import { create } from "zustand";

type Testimonial = {
  fields: z.infer<typeof schemas.freelancer.testimonial>;
  setFields: {
    name: (payload: ChangeEvent<HTMLInputElement>) => void;
    email: (payload: ChangeEvent<HTMLInputElement>) => void;
    position: (payload: ChangeEvent<HTMLInputElement>) => void;
    message: (payload: ChangeEvent<HTMLTextAreaElement>) => void;
  };
  clear: () => void;
};

const initialState = {
  name: "",
  email: "",
  position: "",
  message: "",
};

const testimonial = create<Testimonial>((set) => ({
  fields: initialState,
  setFields: {
    name: (payload) =>
      set((state) => ({
        fields: { ...state.fields, name: payload.target.value },
      })),
    email: (payload) =>
      set((state) => ({
        fields: { ...state.fields, email: payload.target.value },
      })),
    position: (payload) =>
      set((state) => ({
        fields: { ...state.fields, position: payload.target.value },
      })),
    message: (payload) =>
      set((state) => ({
        fields: { ...state.fields, message: payload.target.value },
      })),
  },
  clear: () => set({ fields: initialState }),
}));

export default testimonial;
