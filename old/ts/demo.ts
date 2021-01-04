import SS from "./type";

interface ClockInterface {
  tick();
}

interface ClockConstructor {
  new (hours: number, minute: number): ClockInterface;
}

function createClock(
  ctor: ClockConstructor,
  hours: number,
  minute: number
): ClockInterface {
  return new ctor(hours, minute);
}

class DigitalClock implements ClockInterface {
  tick() {}
}

class AnalogClock implements ClockInterface {
  tick() {}
}

interface Shape {
  color: string;
}
interface PenStrock {
  penWidth: number;
}
interface Square extends Shape, PenStrock {
  lineWidth: number;
}

let sq = {} as Square;
sq.color = "red";
sq.lineWidth = 20;
sq.penWidth = 123123;

interface Couter {
  (start: number): string;
  interval: number;
  reset(): void;
}

function getCounter(): Couter {
  let counter = function (start: number) {
    console.log(start);
  } as Couter;
  counter.interval = 123;
  counter.reset = function () {};
  return counter;
}

let b = getCounter();
console.log(b);
