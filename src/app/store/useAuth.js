import { create } from "zustand";

const useAuth = create((set) => ({
  isLogIn: false,
  name: "",
  email: "",
  logIn: (name, email) => {
    set(() => ({
      isLogIn: true,
      name: name,
      email: email,
    }));
  },
  logOut() {
    set(() => ({
      isLogIn: false,
      name: "",
      email: "",
    }));
  },
  resetCart: () => {
    set({ cartItems: [] });
    set({ totalPrice: 0 });
  },
}));

export default useAuth;
