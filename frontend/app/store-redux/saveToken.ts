/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";
interface AuthState {
  token: any;
}

function verificationToken(token: any) {
  const actually = Math.floor(Date.now() / 1000);
  
  if (actually > token.exp) {
    localStorage.removeItem("token");
    return true;
  }
  return false;
}

const getInitialToken = () => {
  if (typeof window !== "undefined") {
    let localStorageEliminated = false;
    let tokenDecode = "";
    const token = localStorage.getItem("token");

    if (token) {
      tokenDecode = jwtDecode(token);
      localStorageEliminated = verificationToken(tokenDecode);
    } else {
      return null;
    }

    if (localStorageEliminated) return null;
    return token;
  }
};

const initialState: AuthState = {
  token: getInitialToken(),
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    saveToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      localStorage.setItem("token", action.payload);
    },

    clearToken: (state) => {
      state.token = null;
      localStorage.removeItem("token");
    },
  },
});

export const { saveToken, clearToken } = authSlice.actions;
export default authSlice.reducer;
