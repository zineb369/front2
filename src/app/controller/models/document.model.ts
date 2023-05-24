import {Professor} from "./professor.model";
import {Subject} from "./subject.model";
import {Semester} from "./semester.model";
import {Group} from "./group.model";

export class Document {
  public id!: number;
  public name!: string;
  public description!: string;
  public path!: string;
  public group!: Group ;
  public semester!: Semester ;
  public subject!: Subject ;
  public prof!: Professor ;
  public documentType!: DocumentType ;
}
