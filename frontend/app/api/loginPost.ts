/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosAdapter } from "../tools/apiResponsive";

interface LoginPostSend {
  email: string;
  password: string;
}

interface TokenResponse {
  access_token: string;
  message: string;
}

const axios = new AxiosAdapter();

async function loginPost(data: LoginPostSend) {
  try {
    const url = process.env.NEXT_PUBLIC_POST_LOGIN_URL;

    if (!url) {
      throw new Error(
        "La URL de registro no está definida en las variables de entorno"
      );
    }

    const res = await axios.post<TokenResponse, LoginPostSend>(url, data);
    return res;
  } catch (error: any) {
    throw error;
  }
}

export default loginPost;
