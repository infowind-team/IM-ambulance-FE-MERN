import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { userId } = req.query;
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_BE_DOMAIN}/users/${userId}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': req.headers.authorization || '',
      },
    });

    const data = response.data;
    return res.status(200).json(data);
  } catch (err: any) {
    console.error('User details API request failed:', err);
    return res.status(500).json({ error: err.message });
  }
}
