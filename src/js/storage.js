const save = (key, value) => {
  try {
    const searilizedState = JSON.stringify(value);
    localStorage.setItem(key, searilizedState);
  } catch (error) {
    console.error('Set state error:', error.message);
  }
}

const load = key => {
  try {
    const searilizedState = localStorage.getItem(key);
    return searilizedState === null ? undefined : JSON.parse(searilizedState);
  } catch (error) {
    console.error('Get state error:', error.message);
  }
};

export { save, load };

