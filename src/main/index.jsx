import "./index.css";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { timerAction, taskDataAction } from "../action";

import TaskList from "../task-list";

const Main = () => {
  const dispatch = useDispatch();
  const timerValue = useSelector((state) => state.taskReducer.timerValue);

  const [taskName, setTaskName] = useState("");
  const [taskNumber, setTaskNumber] = useState(0);
  const [taskOldNumber, setTaskOldNumber] = useState(timerValue);
  const [timer, setTimer] = useState(null);

  function updateTaskNumber(value) {
    const number = Number(value);
    setTaskNumber(number);
  }

  function startCounter() {
    let num = taskNumber;
    let oldNum = taskOldNumber;
    const timerCounter = setInterval(() => {
      num = num + 1;
      oldNum = oldNum + 1;

      updateTaskNumber(num);
      setTaskOldNumber(oldNum);
      dispatch(timerAction(oldNum));
    }, 1000);

    setTimer(timerCounter);
  }

  function stopCounter() {
    clearInterval(timer);
    sendData();
    updateTaskNumber(0);
  }

  function sendData() {
    if (taskName) {
      const result = { name: taskName, field: taskNumber };
      dispatch(taskDataAction(result));
    }
  }

  return (
    <section className="section-container">
      <div className="sectionWrapper">
        <div className="inputfield">
          <input
            placeholder="task name"
            autoCapitalize="off"
            autoComplete="off"
            type="text"
            name="name"
            onChange={(event) => setTaskName(event.target.value)}
          />
          <input
            placeholder="task number"
            autoCapitalize="off"
            autoComplete="off"
            type="number"
            name="number"
            value={taskNumber}
            onChange={(event) => updateTaskNumber(event.target.value)}
          />
        </div>
        <div className="buttonfield">
          <button
            className="start btn btn-primary"
            onClick={() => startCounter()}
          >
            START
          </button>
          <button className="stop btn btn-danger" onClick={() => stopCounter()}>
            STOP
          </button>
        </div>
        <TaskList />
      </div>
    </section>
  );
};

export default Main;
