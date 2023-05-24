import {Student} from "./student.model";
import {Test} from "./test.model";

export class Grade {
  public id!: number;
  public value!: string;
  public student!: Student ;
  public test!: Test ;

}
