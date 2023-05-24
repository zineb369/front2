import {Student} from "./student.model";
import {Document} from "./document.model";

export class ExerciceResponse {
  public id!: number;
  public libelle!: string;
  public description!: string;
  public path!: string;
  public student!: Student ;
  public document!: Document ;

}
