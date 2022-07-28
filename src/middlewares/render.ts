import HttpStatusCodes from 'http-status-codes';
import { Middleware } from '../types/express';
import { Request, Response } from 'express';

export const accepted: Middleware = (req: Request, res: Response) => {
  res.status(HttpStatusCodes.ACCEPTED).json({});
};
