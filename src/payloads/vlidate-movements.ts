import Joi from 'joi';

import { IMovement, MovementSchema } from '../models/movement';
import { ICheckpoint, CheckpointSchema } from '../models/checkpoint';

export interface IValidateMovementPayload {
  movements: IMovement[];
  balances: ICheckpoint[];
}

export const ValidateMovementSchema = Joi.object({
  movements: Joi.array().items(MovementSchema).required(),
  balances: Joi.array().items(CheckpointSchema).required(),
}).meta({ className: 'IValidateMovementPayload' });
