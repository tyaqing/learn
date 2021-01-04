// console.time();

// const openDoor = (cb) => {
//   setTimeout(cb, 1000);
// };
// const putIn = (cb) => {
//   setTimeout(cb, 3 * 1000);
// };
// const closeDoor = (cb) => {
//   setTimeout(cb, 1000);
// };
// const done = () => {
//   console.timeEnd();
//   console.log("done");
// };

// openDoor(() => putIn(() => closeDoor(done)));

const openDoor = () => {
  return new Promise((res) => {
    setTimeout(() => {
      res();
      console.log("im done ,openDoor");
    }, 1000);
  });
};

const putIn = () => {
  return new Promise((res) => {
    setTimeout(() => {
      res();
      console.log("im done ,putIn");
    }, 3000);
  });
};

const closeDoor = () => {
  return new Promise((res) => {
    setTimeout(() => {
      res();
      console.log("im done ,closeDoor");
    }, 1000);
  });
};

const result = openDoor()
  .then(() => {
    console.log("中间我还想做点其他的事假");
  })
  .then(putIn)
  .then(() => {
    console.log("开个小差");
  })
  .then(closeDoor);
