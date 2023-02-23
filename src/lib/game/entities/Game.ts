import type { Level } from './Level';
import { Machine } from './Machine';

export class Game {
  level?: Level;
  machine: Machine;

  constructor(level: Level) {
    this.level = level;
    this.machine = new Machine(level);
    this.machine.reset();
  }

  run() {
    // TODO
  }

  reset() {
    // TODO
  }

  pause() {
    // TODO
  }
}
