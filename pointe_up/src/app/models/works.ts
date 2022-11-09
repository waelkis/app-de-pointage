import { Project } from "./project";
import { User } from "./user";

export class Works {
  id!: object;
  nombre_heur!: string;
  description!: string;
  date_jour!:string;

  project!: Project;
  user!:User

}

export interface WorksInterface {
  id : number,
  nombre_heur: string,
  description: string,
  date_jour:string,
  project: Project,
  user:User
}
