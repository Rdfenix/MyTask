import "./index.css";
import React from "react";
import { useSelector } from "react-redux";

const TaskList = () => {
  const timerValue = useSelector((state) => state.taskReducer.timerValue);
  const tasks = useSelector((state) => state.taskReducer.tasks);

  return (
    <div className="taskListContainer">
      <div className="counterInfo">
        <span>Timer:</span>
        <span>{timerValue}</span>
      </div>
      <div className="taskList">
        <ul>
          {tasks.map((task) => {
            if (task.id === 0) {
              return "";
            }

            return (
              <li key={task.id.toString()}>
                <span>{task.id}</span>
                <span>{task.name}</span>
                <span>{task.field}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default TaskList;
