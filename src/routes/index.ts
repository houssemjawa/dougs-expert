import { Router } from 'express';
import validate from './validate';
import { accepted } from '../middlewares/render';

/**
 * @route POST /api/v1/movements/validation
 * @param {IValidateMovementPayload} req.body
 * @returns 202
 * @returns {ImATeapotError} 418
 */
export default Router().post('/movements/validation', validate, accepted);
