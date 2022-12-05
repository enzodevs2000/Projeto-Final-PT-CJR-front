import { useState } from "react";

import AddAdmin from "./AddAdmin.jsx";
import RemoveAdmin from "./RemoveAdmin.jsx";

function WhatAdmin(props) {
    const colorCheck = props.colorCheck;

    const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  const [isCheck, setIsCheck] = useState(false);

  function handleChange(e) {
    console.log(e.target.checked);
  }

  const WhatRender = !isCheck ? (
    <AddAdmin
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      isCheck={isCheck}
      setIsCheck={setIsCheck}
    />
  ) : (
    <RemoveAdmin
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
          className={`form-checkbox appearence-none ${colorCheck} fill-black checked:accent-black`}
          checked={isCheck}
          onChange={handleChange}
        />
      </button>
      {WhatRender}
    </>
  );
}

export default WhatAdmin;
