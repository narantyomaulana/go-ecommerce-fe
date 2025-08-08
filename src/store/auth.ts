import { create } from "zustand";
import { jwtDecode } from "jwt-decode";

interface JwtPlayload {
  sub: string;
  full_name: string;
  email: string;
  role: string;
  member_since: string;
}

interface AuthStoreState {
  isLoggedIn: boolean;
  jwtPayload: JwtPlayload | null;
  role: "customer" | "admin";
  login: (token: string) => void;
}

export const useAuthStore = create<AuthStoreState>((set) => ({
  isLoggedIn: false,
  jwtPayload: null,
  role: "customer",
  login: (token: string) =>
    set((state) => {
      try {
        const claims = jwtDecode<JwtPlayload>(token);
        return {
          ...state,
          jwtPayload: claims,
          isLoggedIn: true,
          role: claims.role === "admin" ? "admin" : "customer",
        };
      } catch {
        return {
          ...state,
        };
      }
    }),
}));
