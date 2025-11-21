import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "DELETE") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
  const id = req.query.id || req.body.id;

  if (!id) {
    return res.status(400).json({ message: "Vehicle ID is required" });
  }

  try {
    const response = await axios.delete(`${process.env.BASE_URL}/vehicles/${id}`, {
      headers: {
        Authorization: req.headers.authorization || "",
        "Content-Type": "application/json",
      },
    });

    return res.status(200).json(response.data);
  } catch (error: any) {
    console.error("Error deleting vehicle:", error?.response?.data || error.message);

    return res.status(error?.response?.status || 500).json({
      message: "Failed to delete vehicle",
      error: error?.response?.data || error.message,
    });
  }
}
