import { registerBinaryCodes, instructionTypes } from '../constants';
import convertBinaryStringToHexString from '../../helpers/convert-binary-string-to-hex-string';

const generate_SWAP_r8 = () => { // eslint-disable-line camelcase
  const instructions = [];

  Object.entries(registerBinaryCodes)
    .forEach(([register, registerBinaryCode]) => {
      const instruction = {};

      instruction.mnemonic = `SWAP ${register}`;
      instruction.type = instructionTypes.ROTATE_SHIFT;
      instruction.flags = {
        CY: '0',
        H: '0',
        N: '0',
        Z: 'Z',
      };
      instruction.cycles = '2';
      instruction.bytes = 2;

      const opCodeInBinary = `1100101100110${registerBinaryCode}`;
      instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);

      instructions.push(instruction);
    });

  return instructions;
};

export default generate_SWAP_r8; // eslint-disable-line camelcase
