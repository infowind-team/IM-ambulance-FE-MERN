import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { page, limit, search, status } = req.query;

    // Build search params safely
    const queryParams = new URLSearchParams();

    if (search) queryParams.append("search", String(search));
    if (status) queryParams.append("status", String(status));

    const backendUrl = `http://192.168.1.73:9000/cases/all/${page}/${limit}?${queryParams.toString()}`;

    const response = await fetch(backendUrl, {
      headers: {
        "Content-Type": "application/json",
        Authorization: req.headers.authorization || "",
      },
    });

    const data = await response.json();
    res.status(response.status).json(data);
  } catch (error: any) {
    res.status(500).json({ message: "Error fetching cases", error: error.message });
  }
}
