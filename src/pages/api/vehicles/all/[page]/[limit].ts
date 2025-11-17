 import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { page, limit, search, status, sortBy, sortOrder } = req.query;


  try {
    if (!page || !limit) {
      return res.status(400).json({
        message: "Page and limit are required path params.",
      });
    }

    const response = await axios.get(
      `http://192.168.1.73:9000/vehicles/all/${page}/${limit}`,
      {
          params: {
              page,
              limit,
              search: search || undefined,
              status: status || undefined,
              sortBy,
              sortOrder,
          },
        headers: {
          "Content-Type": "application/json",
          Authorization: req.headers.authorization || "",
        },
        paramsSerializer: (params) => {
          const urlParams = new URLSearchParams();
          for (const key in params) {
            if (params[key] !== undefined) {
              urlParams.append(key, params[key] as string);
            }
          }
          return urlParams.toString();
        },
      }
    );

    res.status(200).json({
      message: "Vehicle list fetched successfully",
      data: response.data,
    });
  } catch (error: any) {
    console.error("Error fetching vehicle list:", error.message);
    res.status(error.response?.status || 500).json({
      message: "Failed to fetch vehicle list",
      error: error.response?.data || error.message,
    });
  }
}