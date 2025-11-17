import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {

    const response = await axios.get("http://192.168.1.73:9000/hrm/employee-stats", {
      headers: {
        "Content-Type": "application/json",
        Authorization:  req.headers.authorization || "",
    }});

    return res.status(200).json(response.data);
  } catch (error: any) {
    console.error("Error fetching employee stats:", error.message);
    return res.status(error?.response?.status || 500).json({
      error: "Failed to fetch employee stats",
      details: error?.response?.data || error.message,
    });
  }
}
