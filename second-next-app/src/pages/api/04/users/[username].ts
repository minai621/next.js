import { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';
import { promises as fs } from 'fs';

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  console.log('call');
  const {
    query: { username },
  } = req;
  const jsonDirectory = path.join(process.cwd() + '/src', 'json');
  const fileContents = await fs.readFile(jsonDirectory + '/users.json', 'utf8');
  console.log(fileContents);
  const users = JSON.parse(fileContents);
  let targetUser = null;
  users.forEach((user: { username: string | string[] | undefined }) => {
    if (user.username === username) {
      targetUser = user;
    }
  });
  if (targetUser) {
    res.status(200).json(targetUser);
  } else {
    res.status(404).json({ notFound: true });
  }
};
