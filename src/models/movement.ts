import Joi from 'joi';

/**
 * Interface IMovement
 * @param {number} id - operation unique id
 * @param {Date} date - operation date
 * @param {string} wordding - wording
 * @param {number} amount - amount
 */
export interface IMovement {
  id: number;
  date: Date;
  wording: string;
  amount: number;
}

export const MovementSchema = Joi.object({
  id: Joi.number().required(),
  date: Joi.date().required(),
  wording: Joi.string().required(),
  amount: Joi.number().required(),
}).meta({ className: 'IMovement' });
