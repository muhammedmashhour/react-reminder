import { ADD_REMINDER, REMOVE_REMINDER, CLEAR_ALL_REMINDERS } from './../types';


const reducers = (state = [], action) => {
  if (action.type === ADD_REMINDER) {
    let reminders = [...state, {text: action.text, date: action.date, id: (Math.random() * 684854)}];
    return reminders
  } else if (action.type === REMOVE_REMINDER) {
    let reminders = state.filter((el) => {
      return el.id !== action.id
    });
    return reminders;
  } else if (action.type === CLEAR_ALL_REMINDERS) {
    if (state.length) {
      let reminders = state;
      reminders = [];
      return reminders;
    } else {
      console.log('no reminder found!');
    }
  }
}

export default reducers;