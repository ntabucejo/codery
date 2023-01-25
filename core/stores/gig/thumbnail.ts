import schemas from "@core/validations/schemas";
import { ChangeEvent } from "react";
import { z } from "zod";
import { create } from "zustand";

type Thumbnail = {
  fields: z.infer<typeof schemas.gig.thumbnail>;
  setFields: {
    image: (payload: ChangeEvent<HTMLInputElement> | string) => void;
    title: (payload: ChangeEvent<HTMLInputElement>) => void;
    description: (payload: ChangeEvent<HTMLTextAreaElement>) => void;
    repository: (payload: ChangeEvent<HTMLInputElement>) => void;
    website: (payload: ChangeEvent<HTMLInputElement>) => void;
  };
  clear: () => void;
};

const initialState = {
  image: "",
  title: "",
  description: "",
  repository: "",
  website: "",
};

const thumbnail = create<Thumbnail>((set) => ({
  fields: initialState,
  setFields: {
    image: (payload) => {
      if (typeof payload === "string") {
        set((state) => ({
          fields: { ...state.fields, image: payload },
        }));
      } else {
        set((state) => ({
          fields: { ...state.fields, image: payload.target.value },
        }));
      }
    },
    title: (payload) =>
      set((state) => ({
        fields: { ...state.fields, title: payload.target.value },
      })),
    description: (payload) =>
      set((state) => ({
        fields: { ...state.fields, description: payload.target.value },
      })),
    repository: (payload) =>
      set((state) => ({
        fields: { ...state.fields, repository: payload.target.value },
      })),
    website: (payload) =>
      set((state) => ({
        fields: { ...state.fields, website: payload.target.value },
      })),
  },
  clear: () => set({ fields: initialState }),
}));

export default thumbnail;
