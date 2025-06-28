export const initializeTimes = () => {
  // Return initial times based on current time (filter out past times for today)
  const now = new Date();
  const currentHour = now.getHours();
  const allTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  if (new Date().toISOString().split('T')[0] === now.toISOString().split('T')[0]) {
    return allTimes.filter(time => parseInt(time.split(':')[0]) > currentHour);
  }
  return allTimes;
};

export const updateTimes = (state, selectedDate) => {
  console.log(`Updating times for date: ${selectedDate}`);
    const date = new Date(selectedDate);
  const isWeekend = date.getDay() === 0 || date.getDay() === 6;
  return isWeekend
    ? ['16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00']
    : ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
};

export function timesReducer(state, action) {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return updateTimes(state, action.payload);
    default:
      return state;
  }
}