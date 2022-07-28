import Joi from 'joi';

/**
 * Interface ICheckpoint
 * @param {Date} date
 * @param {balance} balance
 */
export interface ICheckpoint {
  date: Date;
  balance: number;
}

export const CheckpointSchema = Joi.object({
  date: Joi.date().required(),
  balance: Joi.number().required(),
}).meta({ className: 'ICheckpoint' });

