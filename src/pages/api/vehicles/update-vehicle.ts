import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (req.method !== "PUT") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  if (!id) {
    return res.status(400).json({ message: "Vehicle ID is required" });
  }

  try {

    const {
      vehicleNumber,
      chassisNumber,
      type,
      scheme,
      make,
      model,
      year,
      status,
      propellant,
      driverId,
      medicId,
      escortId,
      ownerId,
      specifications = {},
      emissions = {},
      owner = {},
      maintenance = [],
      certificates = [],
    } = req.body;

   
    const payload = {
      vehicleNumber,
      chassisNumber,
      type,
      scheme,
      make,
      model,
      year: Number(year),
      status,
      propellant,
      driverId,
      medicId,
      escortId,
      ownerId,
      specifications,
      emissions,
      owner,
      maintenance,
      certificates,
    };

    
    const response = await axios.put(
      `${process.env.BASE_URL}/vehicles/update/${id}`,
      payload,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: req.headers.authorization || "",
        },
        validateStatus: () => true,
      }
    );

    return res.status(response.status).json(response.data);
  } catch (error: any) {
    console.error("Error updating vehicle:", error.message);
    return res.status(error.response?.status || 500).json({
      message: error.response?.data?.message || "Error updating vehicle",
    });
  }
}
