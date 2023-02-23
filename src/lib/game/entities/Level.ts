import type { IPart } from './Parts';
import { Playbook } from './Playbook';

export abstract class Level {
  id: string;
  availableComponents: IPart[];
  playbook: Playbook = new Playbook();
  abstract readonly title: string;

  constructor(id: string, components: IPart[]) {
    this.id = id;
    this.availableComponents = components || [];
  }
}
