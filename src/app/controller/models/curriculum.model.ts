import {Study} from "./study.model";
import {Group} from "./group.model";
import {Semester} from "./semester.model";

export class Curriculum {
  public id!: number;
  public semester!: Semester ;
  public group!: Group ;
  public studys!: Array<Study>;
}
