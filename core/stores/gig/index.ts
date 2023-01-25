import schemas from "@core/validations/schemas";
import { ChangeEvent } from "react";
import { z } from "zod";
import { create } from "zustand";

type Gig = {
  fields: z.infer<typeof schemas.gig.base>;
  setFields: {
    title: (payload: ChangeEvent<HTMLInputElement>) => void;
    description: (payload: ChangeEvent<HTMLTextAreaElement>) => void;
    category: (payload: { id: string; name: string }) => void;
    tags: (payload: { id: string; name: string }) => void;
    thumbnails: (payload: z.infer<typeof schemas.gig.thumbnail>) => void;
    from: (payload: ChangeEvent<HTMLInputElement>) => void;
    to: (payload: ChangeEvent<HTMLInputElement>) => void;
    period: (payload: ChangeEvent<HTMLInputElement>) => void;
    isPublished: (payload: ChangeEvent<HTMLInputElement>) => void;
  };
  clear: () => void;
};

const initialState = {
  title: "",
  description: "",
  category: { id: "", name: "" },
  tags: [],
  thumbnails: [],
  from: 5,
  to: 100,
  period: 5,
  isPublished: false,
};

const gig = create<Gig>((set) => ({
  fields: initialState,
  setFields: {
    title: (payload) =>
      set((state) => ({
        fields: { ...state.fields, title: payload.target.value },
      })),
    description: (payload) =>
      set((state) => ({
        fields: { ...state.fields, description: payload.target.value },
      })),
    category: (payload) =>
      set((state) => ({
        fields: { ...state.fields, category: payload },
      })),
    tags: (payload) =>
      set((state) => ({
        fields: {
          ...state.fields,
          tags: [...state.fields.tags, payload],
        },
      })),
    thumbnails: (payload) =>
      set((state) => ({
        fields: {
          ...state.fields,
          thumbnails: [...state.fields.thumbnails!, payload],
        },
      })),
    from: (payload) =>
      set((state) => ({
        fields: { ...state.fields, from: +payload.target.value },
      })),
    to: (payload) =>
      set((state) => ({
        fields: { ...state.fields, to: +payload.target.value },
      })),
    period: (payload) =>
      set((state) => ({
        fields: { ...state.fields, period: +payload.target.value },
      })),
    isPublished: (payload) =>
      set((state) => ({
        fields: { ...state.fields, isActive: payload.target.checked },
      })),
  },
  clear: () => set({ fields: initialState }),
}));

export default gig;
