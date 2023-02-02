import { useState } from "react";
import RobotForm from "./RobotForm";
import RobotList from "./RobotList";

function App() {
  return (
    <div>
      A list of robots
      <RobotList newRobotEntry={newRobot} />
    </div>
  );
}

export default App;
