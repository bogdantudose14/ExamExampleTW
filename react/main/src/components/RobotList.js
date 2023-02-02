import { useEffect, useState } from "react";
import store from "../stores/RobotStore";
import Robot from "./Robot";

function RobotList(props) {
  console.log(props.dataFromApp);

  const [robots, setRobots] = useState([]);

  useEffect(() => {
    setRobots(store.getRobots());
    store.emitter.addListener("UPDATE", () => {
      setRobots(store.getRobots());
    });
  }, []);

  return (
    <div>
      <div>
        {robots.map((e, i) => (
          <Robot item={e} key={i} />
        ))}
      </div>
    </div>
  );
}

export default RobotList;
