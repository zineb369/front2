import {Semester} from "./semester.model";

export class Season {
  public id!: number;
  public name!: string;

  public dateDebut!: Date;
  public dateFin!: Date;
  public semesters!: Array<Semester>;

}
