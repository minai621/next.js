import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (!req.query.username) {
    res.status(403).json({
      error: 'Missing "username" query parameter',
    });
    return;
  }

  const username = req.query.username;
  const API_ENDPOINT = process.env.API_ENDPOINT;
  const API_TOKEN = process.env.API_TOKEN;
  console.log(`/api/04/users/${username}`);
  const userReq = await axios.get(`/api/singleUser/${username}`);
  console.log(userReq);
  res.status(200).json(userReq.data);
}
