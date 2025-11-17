import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { userId } = req.query;

  try {

    const response = await axios.delete(`http://192.168.1.73:9000/users/${userId}`, {
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
