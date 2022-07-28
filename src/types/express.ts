import { NextFunction, Request, Response } from 'express';

/**
 * @typedef Middleware
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * 
 * @returns {any}
 * @returns {Promise<any>}
 */
export type Middleware = (req: Request, res: Response, next?: NextFunction) => any|Promise<any>;
