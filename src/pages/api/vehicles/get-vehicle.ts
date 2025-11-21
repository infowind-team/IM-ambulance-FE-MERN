import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { vehicleId } = req.query;

  try {
    
    const response = await axios.get(`${process.env.BASE_URL}/vehicles/details/${vehicleId}`, {
      headers: {
        Authorization: req.headers.authorization,
        "Content-Type": "application/json",
      },
    });

    
    return res.status(200).json(response.data);
  } catch (error: any) {
    console.error("Error fetching vehicle by ID:", error?.response?.data || error.message);
    return res.status(error?.response?.status || 500).json({
      message: "Failed to fetch vehicle details",
      error: error?.response?.data || error.message,
    });
  }
}
