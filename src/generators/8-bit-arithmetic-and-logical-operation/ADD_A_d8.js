import convertBinaryStringToHexString from '../../helpers/convert-binary-string-to-hex-string';
import { instructionTypes } from '../constants';

const generate_ADD_A_d8 = () => { // eslint-disable-line camelcase
  const instruction = {};

  instruction.mnemonic = 'ADD A, d8';
  instruction.type = instructionTypes.EIGHT_BIT_ARITHMETIC_AND_LOGICAL_OPERATION;
  instruction.flags = {
    CY: '8-bit',
    H: '8-bit',
    N: '0',
    Z: 'Z',
  };
  instruction.cycles = '2';
  instruction.bytes = 2;

  const opCodeInBinary = '11000110';
  instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);

  return instruction;
};

export default generate_ADD_A_d8; // eslint-disable-line camelcase
