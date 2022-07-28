import HttpStatusCodes from 'http-status-codes';
import CustomError from './custom-error';
import Reason from '../../types/reason';

export default class ImATeapotError extends CustomError {
  public static readonly Msg =
    'I\'m not a teapot';
  public static readonly HttpStatus = HttpStatusCodes.IM_A_TEAPOT;

  constructor() {
    super(ImATeapotError.Msg, ImATeapotError.HttpStatus);
  }
}
