/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

interface HttpAdapter {
  get<T>(url: string): Promise<T | undefined | null>;
  post<T, K = unknown>(url: string, data: K): Promise<T | undefined | null>;
}

export class AxiosAdapter implements HttpAdapter {
  async get<T>(url: string): Promise<T | undefined | null> {
    const response = await axios.get<T>(url);
    return response.data;
  }

  async post<T, K = unknown>(
    url: string,
    data: K
  ): Promise<T> {
    try {
      const response = await axios.post<T>(url, data);
      return response.data;
    } catch (error: any) {
      throw error;
    }
  }
}
