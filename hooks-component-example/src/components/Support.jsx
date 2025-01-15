import { useState } from "react";

const Support = () => {
  const [count, setCount] = useState(0);
  return (
    <button className="outline" onClick={() => setCount(count + 1)}>
      { count === 0 ? "Click to support" : `Supported ${count} times` }
    </button>
  );
}
export default Support;