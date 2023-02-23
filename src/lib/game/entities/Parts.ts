export interface IPart {
  name: string;
  description: string;
}

export class BumperCircle implements IPart {
  name = 'Bumper (circular)';
  description = 'Bounces the ball away giving it bonus speed after collisions';
}
