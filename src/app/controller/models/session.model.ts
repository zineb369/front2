import {Professor} from "./professor.model";
import {Slot} from "./slot.model";
import {Subject} from "./subject.model";
import {Curriculum} from "./curriculum.model";
import {Day} from "./day.model";

export class Session {
  public id!: number;
  public prof!: Professor ;
  public slot!: Slot ;
  public subject!: Subject ;
  public curriculum!: Curriculum ;
  public day!: Day ;
}
