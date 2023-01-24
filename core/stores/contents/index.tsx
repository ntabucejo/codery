import { Technology } from "@prisma/client";
import { create } from "zustand";

type Contents = {
  technologies: Technology[];
  setTechnologies: (payload: Technology[]) => void;
};

const contents = create<Contents>((set) => ({
  technologies: [],
  setTechnologies: (payload) => set({ technologies: payload }),
}));

export default contents;
