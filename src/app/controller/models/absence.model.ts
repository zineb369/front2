import {Slot} from "./slot.model";
import {Day} from "./day.model";
import {Subject} from "./subject.model";
import {Student} from "./student.model";

export class Absence {
  public id!: number;
  public date!: Date;
  public student!: Student ;
  public subject!: Subject ;
  public slot!: Slot ;
  public day!: Day ;
}
