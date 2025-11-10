import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { page, pageSize } = req.query;
    const { search = "", selectedStatus = "ALL STATUS" } = req.query;


    if (typeof search !== "string" || search.length > 100) {
      return res.status(400).json({ error: "Invalid search query" });
    }

    const validStatuses = [
      "ALL STATUS",
      "OPEN",
      "PENDING FOR DISPATCH",
      "DISPATCHED",
      "PENDING CONFIRMATION",
      "PENDING FOR PAYMENT",
      "COMPLETED",
      "CANCELLED",
    ];

    if (typeof selectedStatus !== "string" || !validStatuses.includes(selectedStatus.toUpperCase())) {
      return res.status(400).json({
        error: `Invalid status. Must be one of: ${validStatuses.join(", ")}`,
      });
    }

    
    const response = await axios.get(
      `http://192.168.1.73:9000/cases/get-all/${page}/${pageSize}?search=${encodeURIComponent(
        search
      )}&status=${encodeURIComponent(selectedStatus)}`,
      {headers: {
        'Content-Type': 'application/json',
        'Authorization': req.headers.authorization || '',
      },}
    );

    return res.status(200).json(response.data);
  } catch (error: any) {
    console.error("Backend error:", error.message);
    if (error.response) {
      return res.status(error.response.status).json(error.response.data);
    }
    return res.status(500).json({ error: "Failed to fetch cases" });
  }
}
