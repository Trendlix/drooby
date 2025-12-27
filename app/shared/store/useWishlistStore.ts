import { create } from "zustand";

interface WishlistState {
	count: number;
	increment: () => void;
	decrement: () => void;
	setCount: (count: number) => void;
	reset: () => void;
}

export const useWishlistStore = create<WishlistState>((set) => ({
	count: 6,
	setCount: (count) => set({ count }),
	increment: () => set((state) => ({ count: state.count + 1 })),
	decrement: () => set((state) => ({ count: Math.max(state.count - 1, 0) })),
	reset: () => set({ count: 0 }),
}));
