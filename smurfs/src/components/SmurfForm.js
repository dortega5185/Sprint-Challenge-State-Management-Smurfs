import React, { useState } from "react";
import { connect } from "react-redux";
import { postSmurf } from "../actions";
import Smurfs from "./Smurfs";
import { getSmurfs } from "../actions";

const SmurfForm = (props) => {
  const [newSmurf, setNewSmurf] = useState({
    name: "",
    age: "",
    height: "",
    id: Date.now(),
  });

  const changeHandler = (e) => {
    setNewSmurf({
      ...newSmurf,
      [e.target.name]: e.target.value,
      [e.target.age]: e.target.value,
      [e.target.height]: e.target.value,
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    props.getSmurfs(newSmurf);
  };

  return (
    <div>
      <form onSubmit={submitForm}>
        <label htmlFor="smurfName">
          Name:
          <input
            type="text"
            name="name"
            onChange={changeHandler}
            value={newSmurf.name}
          />
        </label>
        <label htmlFor="smurfAge">
          Age:
          <input
            type="number"
            name="age"
            onChange={changeHandler}
            value={newSmurf.age}
          />
        </label>
        <label htmlFor="smurfHeight">
          Height:
          <input
            type="text"
            name="height"
            onChange={changeHandler}
            value={newSmurf.height}
          />
        </label>
        <button type="submit" onClick={() => props.postSmurf(newSmurf)}>
          Add another Smurf to the village!
        </button>
      </form>
      <div>
        <h1>SMURF ARMY</h1>
        {props.smurfs.map((item) => (
          <Smurfs state={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    addingSmurf: state.addingSmurf,
    smurfs: state.smurfs,
  };
};

export default connect(mapStateToProps, { postSmurf, getSmurfs })(SmurfForm);
