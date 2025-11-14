import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email, password } = JSON.parse(req.body);
  try {
    // const response = await fetch(`https://api.encharge.io/v1/segments/956329/people?limit=${limit}&offset=${offset}&sort=${sort}&order=${order}&ignoreAnonymous=true&userType=patient`, {
    const response = await axios.post(`http://192.168.1.73:9000//auth/sign-in`, {
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
