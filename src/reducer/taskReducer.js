import { SET_TIMER_VALUE, SET_TIMER_TASK } from "../action";
const INITIAL_STATE = {
  timerValue: 0,
  tasks: [
    {
      id: 0,
      name: "",
      field: 0,
    },
  ],
};

const taskReducer = (state = INITIAL_STATE, action) => {
  const { payload, type } = action;

  switch (type) {
    case SET_TIMER_VALUE:
      const result = { ...state, timerValue: payload };

      return result;
    case SET_TIMER_TASK:
      let newData = {};
      const taskFund = state.tasks.findIndex(
        (task) => task.name === payload.name
      );
      if (taskFund > -1) {
        state.tasks[taskFund].field =
          state.tasks[taskFund].field + payload.field;
        newData = state;

        return newData;
      } else {
        const newTask = {
          id: state.tasks.length,
          name: payload.name,
          field: payload.field,
        };
        state.tasks.push(newTask);

        newData = state;

        return newData;
      }
    default:
      return state;
  }
};

export default taskReducer;
