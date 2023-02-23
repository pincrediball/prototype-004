import { Scene } from 'phaser';

const width = 400;
const height = 600;
const ballRadius = 10;

export class MachineScene extends Scene {
  private ball?: Phaser.Physics.Matter.Image;
  private scoreText!: Phaser.GameObjects.Text;
  private score = 0;

  constructor() {
    super({
      key: 'machine',
      physics: {
        default: 'matter',
        matter: {
          setBounds: true,
          debug: {
            showAngleIndicator: true,
            showCollisions: true,
            showBody: true,
            showVelocity: true,
          },
        },
      },
    });
  }

  preload() {
    this.load.image('backplate', '/assets/backplates/A01.png');
    this.load.image('ball', '/assets/ball.png');
    this.load.image('bumper', '/assets/bumper-round-001.png');
    this.load.image('l-flipper', '/assets/l-flipper.png');
    this.load.image('r-flipper', '/assets/r-flipper.png');
  }

  create() {
    this.cameras.main.setBackgroundColor('rgba(255, 255, 255, 1)');
    this.add.image(0, 0, 'backplate').setOrigin(0, 0);

    this.scoreText = this.add
      .text(10, height - 60, `Score: ${this.score}`, {
        fontStyle: 'bold',
        fill: '#000',
        fontSize: 48,
        fontFamily: 'sans-serif',
      } as any) // 'any' because typings seem off for Phaser...
      .setAlpha(0.75);

    this.matter.add.rectangle(310, 60, 10, 120, { isStatic: true });
    const a = this.matter.add.rectangle(360, 160, 10, 120, { isStatic: true });

    this.matter.body.setAngle(a, Math.PI / -4);

    [
      { x: 140, y: 160 },
      { x: 190, y: 80 },
      { x: 190, y: 240 },
      { x: 100, y: 290 },
      { x: 80, y: 40 },
      { x: 40, y: 130 },
      { x: 50, y: 230 },
      { x: 320, y: 300 },
    ].forEach((coords) => {
      const bumper = this.matter.add.image(coords.x, coords.y, 'bumper', undefined, {
        isStatic: true,
      });
      bumper.setCircle(24, { isStatic: true });
      bumper.setBounce(1);
      bumper.setData('piece', 'bumper');
    });

    this.ball = this.matter.add.image(width - ballRadius * 2, height - ballRadius * 2, 'ball');
    this.ball.setCircle(ballRadius);

    this.ball.setOnCollide(this.handleCollision.bind(this));
  }

  private handleCollision(data: Phaser.Types.Physics.Matter.MatterCollisionData) {
    const { bodyA } = data;
    if (bodyA && bodyA.gameObject) {
      const piece = (bodyA.gameObject as Phaser.GameObjects.GameObject).getData('piece');
      if (piece === 'bumper') {
        const velocity = this.ball?.body?.velocity as MatterJS.Vector;
        let vx = velocity.x * 2;
        let vy = velocity.y * 2;
        vx = vx < -18 ? -18 : vx > 18 ? 18 : vx;
        vy = vy < -18 ? -18 : vy > 18 ? 18 : vy;
        this.ball?.setVelocity(vx, vy);
        this.score += 10;
        this.scoreText.text = `Score: ${this.score}`;
      }
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
  update(time: number, delta: number) {}

  plunge() {
    this.ball?.setPosition(width - ballRadius * 2, height - ballRadius * 2);
    this.ball?.setVelocity(0, -25.15);
  }
}
