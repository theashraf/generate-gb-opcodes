import { instructionTypes } from '../constants';
import convertBinaryStringToHexString from '../../helpers/convert-binary-string-to-hex-string';

const generate_NOP = () => { // eslint-disable-line camelcase
  const instruction = {};

  instruction.mnemonic = 'NOP';
  instruction.type = instructionTypes.GENERAL_PURPOSE_ARITHMETIC_OPERATIONS_AND_CPU_CONTROL;
  instruction.flags = {};
  instruction.cycles = '1';
  instruction.bytes = 1;

  const opCodeInBinary = '00000000';
  instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);

  return instruction;
};

export default generate_NOP; // eslint-disable-line camelcase
