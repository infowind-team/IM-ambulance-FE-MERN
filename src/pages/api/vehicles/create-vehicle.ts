import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
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
      certificates:certificates,
      maintenance: maintenance,
      specifications,
      emissions,
      owner,
    };

   
    
    
    const response = await axios.post("http://192.168.1.73:9000/vehicles/create", payload, {
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
