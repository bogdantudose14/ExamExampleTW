import { useState } from "react";
import store from "../stores/RobotStore";

const RobotForm = () => {
  const [robotName, setRobotName] = useState("");
  const [robotType, setRobotType] = useState("");
  const [robotMass, setRobotMass] = useState("");

  const handleRobotAdd = (event) => {
    store.addRobot({
      name: robotName,
      type: robotType,
      mass: robotMass,
    });
  };
  return (
    <div>
      <h1>Robot form</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setRobotMass("");
          setRobotName("");
          setRobotType("");
        }}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <input
          id="name"
          type="text"
          aria-label="name"
          placeholder="Insert Name here"
          value={robotName}
          onChange={(event) => {
            setRobotName(event.target.value);
          }}
        ></input>
        <input
          id="type"
          type="text"
          aria-label="type"
          placeholder="Insert Type here"
          value={robotType}
          onChange={(event) => {
            setRobotType(event.target.value);
          }}
        ></input>
        <input
          id="mass"
          type="text"
          aria-label="mass"
          placeholder="Insert Mass here"
          value={robotMass}
          onChange={(event) => {
            setRobotMass(event.target.value);
          }}
        ></input>
        <button onClick={handleRobotAdd}>Add</button>
      </form>
    </div>
  );
};

export default RobotForm;
