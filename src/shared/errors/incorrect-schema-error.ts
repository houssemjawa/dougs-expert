import HttpStatusCodes from 'http-status-codes';
import CustomError from './custom-error';

export default class IncorrectSchemaError extends CustomError {
    public static readonly HttpStatus = HttpStatusCodes.BAD_REQUEST;

    constructor(Msg: string) {
        super(Msg, IncorrectSchemaError.HttpStatus);
    }
}