import "./styles.css";
import React from "react";

//  By passing callback  function handlesearch as prop to Search
// component, "lifting  up state" can be established.

const App = () => {
  const [parentState, setParentState] = React.useState("");

  // call back function to be passed to child,
  // so that we can set "fromChild" state
  const childCallback = (event) => {
    setParentState(event.target.value);
  };

  return (
    <div>
      <h1>In parent but "parentState" state = {parentState}</h1>

      <hr />

      <Child onSearch={childCallback} />
    </div>
  );
};

const Child = (props) => (
  <div>
    <h2>in child component but we can set "parentState" from here: </h2>
    <input onChange={props.onSearch} />
  </div>
);

export default App;
