import { AxiosAdapter } from "../tools/apiResponsive";

interface RegisterPostSend {
  username: string;
  password: string;
  email: string;
}

const axios = new AxiosAdapter();

async function registerPost(data: RegisterPostSend) {
  try {
    const url = process.env.NEXT_PUBLIC_POST_REGISTER_URL;

    if (!url) {
      throw new Error(
        "La URL de registro no está definida en las variables de entorno"
      );
    }

    const res = await axios.post<unknown, RegisterPostSend>(url, data);
    
    return res;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw  error;
  }
}

export default registerPost;
