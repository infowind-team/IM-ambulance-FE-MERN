import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { employeeId, page, limit } = req.query;
  const { search, status } = req.query;

  try {
    if (!employeeId || !page || !limit) {
      return res.status(400).json({
        message: "employeeId, page, and limit are required path params.",
      });
    }

    const response = await axios.get(
      `http://192.168.1.73:9000/hrm/emp-attendance-list/${employeeId}/${page}/${limit}`,
      {
        params: {
          search: search || undefined,
          status: status || undefined,
        },
        headers: {
          Authorization: req.headers.authorization || "",
        },
      }
    );

    res.status(200).json({
      message: "Employee attendance fetched successfully",
      data: response.data,
    });
  } catch (error: any) {
    console.error("Error fetching employee attendance:", error.message);
    res.status(error.response?.status || 500).json({
      message: "Failed to fetch attendance list",
      error: error.response?.data || error.message,
    });
  }
}

