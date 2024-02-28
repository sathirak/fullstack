// errors.ts
import { Request, Response, NextFunction } from 'express';

export const handle_http_errors = (req: Request, res: Response, next: NextFunction) => {
  res.status(404).send('> looks like there was an error with the API call 🫥');
};