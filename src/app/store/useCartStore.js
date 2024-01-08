import { create } from "zustand";

const useCartStore = create((set, get) => ({
  cartItems: [],
  totalPrice: 0,
  addToCart: (gift, amount) => {
    let newItem = { id: generateUniqueID(), name: gift.name, amount: amount };
    set((state) => ({
      cartItems: [...state.cartItems, newItem],
      totalPrice: state.totalPrice + amount,
    }));
  },
  removeItem(gift) {
    let newCartItems = get().cartItems.filter((item) => item.id !== gift.id);
    set((state) => ({
      cartItems: newCartItems,
      totalPrice: state.totalPrice - gift.amount,
    }));
  },
  resetCart: () => {
    set({ cartItems: [] });
    set({ totalPrice: 0 });
  },
}));

function generateUniqueID() {
  const timestamp = new Date().getTime();
  const randomNumber = Math.floor(Math.random() * 10000);
  return `${timestamp}-${randomNumber}`;
}

export default useCartStore;
