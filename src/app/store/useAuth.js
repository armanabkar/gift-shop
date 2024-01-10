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
}));

export default useAuth;
