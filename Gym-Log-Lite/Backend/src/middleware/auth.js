import jwt from 'jsonwebtoken';

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  
  if (!token) {
    return res.status(403).json({ message: 'Authentication token is missing or malformed' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
    if (err) {
      console.error('Error verifying token:', err);
      return res.status(403).json({ message: 'Invalid token' });
    }

    console.log('Decoded token:', decodedToken); // Log decoded token to inspect its structure
    const userId = decodedToken.userId;

    if (!userId) {
      console.error('User ID not found in token payload');
      return res.status(403).json({ message: 'User ID not found in token payload' });
    }

    req.userId = userId;
    next();
  });
};

export default authenticateToken;
