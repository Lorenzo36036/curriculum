import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  token: string | null | '';
}

// 1. Función para obtener el token de forma segura
const getInitialToken = (): string | null => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("token");
  }
  return null;
};

const initialState: AuthState = {
  token: getInitialToken(),
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    saveToken: (state , action: PayloadAction<string>) => {
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
