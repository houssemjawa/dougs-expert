export enum ReasonCodes {
  DUPLICATED_MOVEMENT = 'DUPLICATED_MOVEMENT',
  MISSING_MOVEMENT = 'MISSING_MOVEMENT',
}

interface Reason {
  code: ReasonCodes;
  message: string;
}

export default Reason;
