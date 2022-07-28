import _ from 'lodash';
import { Request } from 'express';
import Validator from '../types/validator';
import { ValidateMovementSchema } from '../payloads/vlidate-movements';
import IncorrectSchemaError from '../shared/errors/incorrect-schema-error';
import ImATeapotError from '../shared/errors/im-a-teapot-error';
import { IMovement } from '../models/movement';
import { ICheckpoint } from '../models/checkpoint';
import validate from '../middlewares/validate';

const checkShema: Validator = (req: Request): boolean => {
  const { error, value } = ValidateMovementSchema.validate(req.body);

  if (error) {
    throw new IncorrectSchemaError(error.message);
  }

  req.body = value;

  return true;
};

const checkDuplicatedData: Validator = (req: Request): boolean => {
  const movements: IMovement[] = req.body.movements;
  const isWrong: boolean = _.chain(movements)
    .groupBy(
      ({ date }: IMovement): string =>
        `${date.getFullYear()}-${date.getMonth()}`,
    )
    .some((it: IMovement[]) => it.length > 1)
    .value();

  if (isWrong) {
    throw new ImATeapotError();
  }

  return true;
};

const getMonths: Function = (arr: IMovement[] | ICheckpoint[]): string[] =>
  _.chain(arr)
    .groupBy(
      ({ date }: IMovement): string =>
        `${date.getFullYear()}-${date.getMonth()}`,
    )
    .keys()
    .value();

const checkMissingData: Validator = (req: Request): boolean => {
  const movements: IMovement[] = req.body.movements;
  const checkpoints: ICheckpoint[] = req.body.checkpoints;

  const [movementsMonths, checkpointsMonths] = [movements, checkpoints].map(
    (it: IMovement[] | ICheckpoint[]): string[] => getMonths(it),
  );

  const isWrong: boolean = !_.chain(checkpointsMonths)
    .difference(movementsMonths)
    .isEmpty()
    .value();
  
  if (isWrong) {
    throw new ImATeapotError();
  }

  return true;
};

export default validate([
  checkShema,
  checkDuplicatedData,
  checkMissingData,
]);
