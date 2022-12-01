import { useState } from "react";

import AddArquivado from "./AddArquivado.jsx";
import RemoveArquivado from "./RemoveArquivado.jsx";

function WhatArquivado() {
  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  const [isCheck, setIsCheck] = useState(false);

  const WhatRender = !isCheck ? (
    <AddArquivado
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      isCheck={isCheck}
      setIsCheck={setIsCheck}
    />
  ) : (
    <RemoveArquivado
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      isCheck={isCheck}
      setIsCheck={setIsCheck}
    />
  );
  return (
    <>
      <button onClick={openModal}>
        <input
          name="check"
          type="checkbox"
          className="form-checkbox appearence-none bg-cinza-claro fill-black checked:accent-black"
          checked={isCheck}
        />
      </button>
      {WhatRender}
    </>
  );
}

export default WhatArquivado;
