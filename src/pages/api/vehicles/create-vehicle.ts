import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
     const payload = {
      ...req.body,
      year: Number(req.body.year), // only convert year, everything else stays as is
    };
 
    const response = await axios.post(`${process.env.BASE_URL}/vehicles/create`, payload, {
      headers: {
        "Content-Type": "application/json",
        Authorization: req.headers.authorization || "",
      },
      validateStatus: () => true,
    });

    return res.status(response.status).json(response.data);
  } catch (error: any) {
    console.error("Error creating vehicle:", error.message);
    return res.status(error.response?.status || 500).json({
      message: error.response?.data?.message || "Error creating vehicle",
    });
  }
}
