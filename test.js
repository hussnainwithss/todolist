state = { tasks: ['new', 'test', 'index'] };

console.log({
  ...state,
  tasks: [...state.tasks.filter((value, index) => index !== 1)],
});
