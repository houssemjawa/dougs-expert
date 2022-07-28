import { Request } from 'express';

type Validator = (req: Request) => boolean;

export default Validator;
