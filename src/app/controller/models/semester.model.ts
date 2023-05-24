import {Season} from "./season.model";

export class Semester {
  public id!: number;

  public name!: string;
  public dateDebut!: Date;
  public dateFin!: Date;
  public season!: Season ;
}
