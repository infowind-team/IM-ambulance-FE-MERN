import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { page, limit } = req.query;
  const { search, status } = req.query;

  try {
    const backendUrl = `http://192.168.1.73:9000/cases/all/${page}/${limit}?search=${search || ""}&status=${status || ""}`;
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
