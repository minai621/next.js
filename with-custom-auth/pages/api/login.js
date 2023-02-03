import { encode } from '../lib/jwt';
import { serialize } from 'cookie';

export default (req, res) => {
  const { method } = req;
  const { email, password } = req.body;
  if (method !== 'POST') return res.status(404).end();

  if (!email || !password)
    return res.status(400).json({
      error: 'Missing required params',
    });

  const user = authenticateUser(email, password);
  if (user) {
    res.setHeader(
      'Set-Cookie',
      serialize('my_auth', user, { path: '/', httpOnly: true })
    );
    return res.json({ success: true });
  } else
    return res.status(401).json({
      error: 'Wrong email of password',
    });
};

function authenticateUser(email, password) {
  const validEmail = 'minje@test.com';
  const validPassword = 'testpassword';

  if (email === validEmail && password === validPassword) {
    return encode({
      id: '213213213123213',
      name: 'Minje',
      email: 'minje@test.com',
    });
  }
  return null;
}
