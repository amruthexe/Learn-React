import React, { useRef } from 'react';

const FocusInput = () => {
  const inputRef = useRef();

  const handleFocus = () => {
    inputRef.current.focus();  // Focuses the input field when the button is clicked
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleFocus}>Focus the input</button>
    </div>
  );
};

export default FocusInput;
