export type Action =
  | 'plunge'
  | 'l-flipper'
  | 'r-flipper'
  | 'l-tilt'
  | 'r-tilt'
  | 'exclaim-let-it-drain'
  | 'exclaim-excitement'
  | 'exclaim-determination';

export class Playbook {
  actionsPerTick: Map<number, Action[]> = new Map();
}
