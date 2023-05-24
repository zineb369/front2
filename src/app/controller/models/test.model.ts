import {TestType} from "./test-type.model";
import {Subject} from "./subject.model";

export class Test {
  public id!: number;
  public name!: string;

  public coeffision!: number;
  public testType!: TestType ;
  public subject!: Subject ;
}
