import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  
  try {
    const response = await axios.post('http://192.168.1.73:9000/settings/create', req.body, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': req.headers.authorization || '',

      },
    });

    return res.status(200).json(response.data);
  } catch (error: any) {
    console.error('Error creating case:', error.message);
    return res.status(error.response?.status || 500).json({
      message: error.response?.data?.message || 'Error creating case',
    });
  }
}
