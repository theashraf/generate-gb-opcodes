import { instructionTypes } from '../constants';
import bitBinaryCodes from './constants';
import convertBinaryStringToHexString from '../../helpers/convert-binary-string-to-hex-string';

const generate_BIT_b1_memory_at_HL = () => { // eslint-disable-line camelcase
  const instructions = [];

  Object.entries(bitBinaryCodes)
    .forEach(([bit, bitBinaryCode]) => {
      const instruction = {};

      instruction.mnemonic = `BIT ${bit}, (HL)`;
      instruction.type = instructionTypes.BIT_OPERATION;
      instruction.flags = {
        H: '1',
        N: '0',
        Z: '!(HL)b',
      };
      instruction.cycles = '4';
      instruction.bytes = 2;

      const opCodeInBinary = `1100101101${bitBinaryCode}110`;
      instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);

      instructions.push(instruction);
    });

  return instructions;
};

export default generate_BIT_b1_memory_at_HL; // eslint-disable-line camelcase
