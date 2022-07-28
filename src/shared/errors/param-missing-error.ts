import HttpStatusCodes from 'http-status-codes';
import CustomError from './custom-error';

export default class ParamMissingError extends CustomError {
  public static readonly Msg =
    'One or more of the required parameters was missing.';
  public static readonly HttpStatus = HttpStatusCodes.BAD_REQUEST;

  constructor() {
    super(ParamMissingError.Msg, ParamMissingError.HttpStatus);
  }
}
