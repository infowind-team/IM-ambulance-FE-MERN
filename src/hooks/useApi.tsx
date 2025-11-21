import axios from "axios";

export function useApi() {
  const token =
    typeof window !== "undefined"
      ? localStorage.getItem("accessToken")
      : null;

  const api = axios.create({
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
      "Content-Type": "application/json",
    },
  });

  const get = async (url: string, params?: any) => {
    const res = await api.get(url, { params });
    return res.data;
  };

  const post = async (url: string, body?: any) => {
    const res = await api.post(url, body);
    return res.data;
  };

  const put = async (url: string, body?: any) => {
    const res = await api.put(url, body);
    return res.data;
  };

  const del = async (url: string) => {
    const res = await api.delete(url);
    return res.data;
  };

  return { get, post, put, del };
}
