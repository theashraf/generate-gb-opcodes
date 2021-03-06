import { instructionTypes } from '../constants';
import convertBinaryStringToHexString from '../../helpers/convert-binary-string-to-hex-string';

const generate_RETI = () => { // eslint-disable-line camelcase
  const instruction = {};

  instruction.mnemonic = 'RETI';
  instruction.type = instructionTypes.CALL_AND_RETURN;
  instruction.flags = {};
  instruction.cycles = '4';
  instruction.bytes = 1;

  const opCodeInBinary = '11011001';
  instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);

  return instruction;
};

export default generate_RETI; // eslint-disable-line camelcase
