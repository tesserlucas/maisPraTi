import React, { useState, useEffect } from 'react';

const TitleUpdater = () => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    document.title = `Number: ${number}`;
  }, [number]);

  const increment = () => setNumber(number + 1);
  const decrement = () => setNumber(number - 1);

  return (
    <div>
      <h1>Current Number: {number}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default TitleUpdater;
