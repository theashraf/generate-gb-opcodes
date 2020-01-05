import React, { createRef, useState } from 'react';
import OpCodeTable from '../op-code-table';
import DetailsSidebar from '../details-sidebar';
import { generateAllInstructions } from '../../generators';
import { createInitialOpCodesGrid, setCellForOpCode } from '../../helpers/grid-helpers';

const App = () => {
  const grids = [];
  grids.push(createInitialOpCodesGrid());
  grids.push(createInitialOpCodesGrid());

  const instructions = generateAllInstructions();

  const [showSidebar, setShowSidebar] = useState(false);
  const [activeInstruction, setActiveInstruction] = useState();

  const sidebarRef = createRef();

  const updateSidebar = (instruction) => {
    setActiveInstruction(instruction);
    setShowSidebar(true);
    sidebarRef.current.focus();
    console.log(sidebarRef);
  };

  // iterate over opcodes to place objects into opCodesGrid
  instructions.forEach((instruction) => {
    setCellForOpCode(instruction.opCode, instruction, grids);
  });

  return (
    <>
      <main role="main">
        <h2>8-bit op codes</h2>
        <OpCodeTable
          opCodesGrid={grids[0]}
          caption="Game Boy CPU instructions, organized by op code"
          setActiveInstruction={updateSidebar}
        />
        <h2>16-bit op codes, where the first 8 bits are 0xCB</h2>
        <OpCodeTable
          opCodesGrid={grids[1]}
          caption='Game Boy CPU instructions for op codes prefixed by "CB"'
          setActiveInstruction={updateSidebar}
        />
      </main>
      { showSidebar
        && (
          <DetailsSidebar
            activeInstruction={activeInstruction}
            hideSidebar={() => setShowSidebar(false)}
            sidebarRef={sidebarRef}
          />
        )}
    </>
  );
};

export default App;
