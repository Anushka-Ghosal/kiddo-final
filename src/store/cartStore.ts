import { create } from "zustand";

type CartStore = {
  count: number;
  addToCart: () => void;
};

export const useCart = create<CartStore>((set) => ({
  count: 0,
  addToCart: () =>
    set((state) => ({
      count: state.count + 1,
    })),
}));