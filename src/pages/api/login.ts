import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email, password } = JSON.parse(req.body);
  try {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_BE_DOMAIN}/auth/sign-in`, {
      email,
      password,
    });

    const data = response.data;
    return res.status(200).json(data);
  } catch (err: any) {
    console.error('Ingest API request failed:', err);
    return res.status(500).json({ error: err.message });
  }
}
