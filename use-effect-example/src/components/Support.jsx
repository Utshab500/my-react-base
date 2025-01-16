import { useState, useEffect } from 'react';
const pageTitle = document.title;

const Support = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    /**
     * This is a switch statement alternative of below if statement
     */
    // count && (document.title = `${pageTitle}--${count}`);
    if (count > 0) {
      document.title = `${pageTitle}--${count}`;
    }
  });
  
  return (
    <button className="outline" onClick={() => setCount(count + 1)}>
      { count === 0 ? "Click to support" : `Supported ${count} times` }
    </button>
  );
}
export default Support;