import React, { useState } from 'react';
import ChildList from './Child.js';
import './style.css';

export default function App() {
  const [count, setCount] = useState(0);
  // console.log('parent component is render');

  return (
    <div>
      <h4>React.Memo!</h4>
      <h5>Count - {count}</h5>
      <button onClick={() => setCount(count + 1)}> Add </button>
      <ChildList />
      <hr />
      <p>
        React.memo is a higher-order component (HOC) in React that allows you to
        memoize a component. This means that if the input props to the component
        have not changed, the memoized component will return the same result
        from the previous render, instead of re-rendering. This can help improve
        performance by avoiding unnecessary render cycles.
      </p>
    </div>
  );
}
