// pages/api/vehicles/get-all.ts
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { page, limit, search, status, sortBy, sortOrder } = req.query;

  // Validate required query params
  if (!page || !limit) {
    return res.status(400).json({
      message: "Page and limit are required query parameters.",
    });
  }

  try {
    const response = await axios.get(
      `${process.env.BASE_URL}/vehicles/all/${page}/${limit}`,
      {
        params: {
          search: search || undefined,
          status: status || undefined,
          sortBy: sortBy || undefined,
          sortOrder: sortOrder || undefined,
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
