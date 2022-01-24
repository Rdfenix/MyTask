export const SET_TIMER_VALUE = "SET_TIMER_VALUE";
export const SET_TIMER_TASK = "SET_TIMER_TASK";

export const timerAction = (payload) => ({
  payload,
  type: SET_TIMER_VALUE,
});

export const taskDataAction = (payload) => ({
  payload,
  type: SET_TIMER_TASK,
});
