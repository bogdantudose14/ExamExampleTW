import RobotForm from "./RobotForm";
import RobotList from "./RobotList";

function App() {
  var data = "data";
  return (
    <div>
      <RobotForm />
      A list of robots
      <RobotList dataFromApp={data} />
    </div>
  );
}

export default App;
