import { useRef, useState } from 'react'

function RefComponent() {

    const clickCount = useRef(0);

    

  const handleClick = () => {
    clickCount.current += 1;

    alert(`You Clickced Me: ${clickCount.current} times`);
  }

    return (
        <button onClick={handleClick}>Click Me</button>

    );
}

export default RefComponent;