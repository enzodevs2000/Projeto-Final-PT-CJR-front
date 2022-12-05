import { useState } from "react";

import AddArquivado from "./AddArquivado.jsx";
import RemoveArquivado from "./RemoveArquivado.jsx";

function WhatArquivado(props) {
  const colorCheck = props.colorCheck;
  console.log(colorCheck);
  
  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  const [isCheck, setIsCheck] = useState(false);

  function handleChange(e) {
    console.log(e.target.checked);
  }

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
          className={`form-checkbox appearence-none fill-black checked:accent-black ${props.colorCheck}`}
          checked={isCheck}
          onChange={handleChange}
        />
      </button>
      {WhatRender}
    </>
  );
}

export default WhatArquivado;
