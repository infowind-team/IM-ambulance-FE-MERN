import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email, password } = req.body;
  try {
    const response = await axios.post('http://192.168.1.73:9000/auth/login', {
      email,
      password,
    });

    const data = response.data;
    return res.status(200).json(data);
  } catch (err: any) {
    console.error('Login API request failed:', err);
    return res.status(500).json({ error: err.message });
  }
}
