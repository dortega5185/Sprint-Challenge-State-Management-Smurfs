import React from "react";

function Smurfs(props) {
  console.log({ props });
  return (
    <div className="smurfs">
      <p>
        Name: {props.state.name}
        <br />
        Age: {props.state.age}
        <br />
        Height: {props.state.height}
      </p>
    </div>
  );
}

export default Smurfs;
