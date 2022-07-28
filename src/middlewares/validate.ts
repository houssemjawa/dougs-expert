import { NextFunction, Request, Response } from 'express';
import Validator from '../types/validator';
import { Middleware } from '../types/express';

/**
 * 
 * @param {Validator[]} validators
 * @returns {Middleware} 
 */
const validate: Function = (validators: Validator[]): Middleware => async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<any> => {
  try {
    await Promise.all(validators.map((v: Validator) => v(req)));
  } catch (err) {
    return next(err);
  }

  return next();
};

export default validate;
