import { instructionTypes } from '../constants';
import convertBinaryStringToHexString from '../../helpers/convert-binary-string-to-hex-string';

const generate_RRA = () => { // eslint-disable-line camelcase
  const instruction = {};

  instruction.mnemonic = 'RRA';
  instruction.type = instructionTypes.ROTATE_SHIFT;
  instruction.flags = {
    CY: 'A0',
    H: '0',
    N: '0',
    Z: '0',
  };
  instruction.cycles = '1';
  instruction.bytes = 1;

  const opCodeInBinary = '00011111';
  instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);

  return instruction;
};

export default generate_RRA; // eslint-disable-line camelcase
