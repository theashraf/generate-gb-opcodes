import convertBinaryStringToHexString from '../../helpers/convert-binary-string-to-hex-string';
import { instructionTypes } from '../constants';

const generate_HL_from_SP_plus_s8 = () => { // eslint-disable-line camelcase
  const instruction = {};

  instruction.mnemonic = 'LD HL, SP+s8';
  instruction.type = instructionTypes.SIXTEEN_BIT_TRANSFER;
  instruction.flags = {
    CY: '16-bit',
    H: '16-bit',
    N: '0',
    Z: '0',
  };
  instruction.cycles = '3';
  instruction.bytes = 2;

  const opCodeInBinary = '11111000';
  instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);

  return instruction;
};

export default generate_HL_from_SP_plus_s8; // eslint-disable-line camelcase
