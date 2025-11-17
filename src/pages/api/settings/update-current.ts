import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse){
    try{
        const response = await axios.put('http://192.168.1.73:9000/settings/update-current',{
        headers: {
          "Content-Type": "application/json",
          Authorization: req.headers.authorization || "",
        },
        validateStatus: () => true,
        
      })
        return res.status(response.status).json(response.data);
    }catch(error: any){
        console.error("Error updating current settings:", error.message);
    return res.status(error.response?.status || 500).json({
      message: error.response?.data?.message || "Error updating current settings",
    });

    }
}
