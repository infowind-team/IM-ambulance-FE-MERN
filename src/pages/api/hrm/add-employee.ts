// src/pages/api/hrm/add-employee.ts

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const res = await fetch("http://192.168.1.73:9000/hrm/add-employee", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": req.headers.authorization || '',
      },
      body: JSON.stringify(req.body),
    });

    const data = await res.json();

    if(!res.ok){
        console.log(res)
        alert("can not add employee")
        return;
    }
    
  } catch (error) {
    console.error("API Error:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
