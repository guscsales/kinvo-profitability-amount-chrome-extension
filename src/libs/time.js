const interval = (callback, time) => {
  let intervalLoop = null;

  return new Promise((resolve) => {
    const done = () => {
      clearInterval(intervalLoop);
      resolve();
    };

    intervalLoop = setInterval(() => callback(done), time);
  });
};

module.exports = {
  interval
};
