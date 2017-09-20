import { Observable } from 'tns-core-modules/data/observable';
import { Segment } from 'nativescript-segment';

export class HelloWorldModel extends Observable {
  public message: string;
  private segment: Segment;

  constructor() {
    super();

    this.segment = new Segment();
    this.message = this.segment.message;
  }
}
