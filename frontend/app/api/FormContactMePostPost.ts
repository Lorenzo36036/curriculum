/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosAdapter } from "../tools/apiResponsive";

interface Form {
  email: string;
  message: string;
  name: string;
  subject: string;
}

const axios = new AxiosAdapter();

async function FormContactMePost(data: Form) {
  try {
    const url = process.env.NEXT_PUBLIC_POST_FORMCONTACTME_URL;

    if (!url) {
      throw new Error(
        "La URL de registro no está definida en las variables de entorno",
      );
    }

    const res = await axios.post<null, Form>(url, data);
    return res;
  } catch (error: any) {
    throw error;
  }
}

export default FormContactMePost;
