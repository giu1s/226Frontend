import { Exercise } from "../exercise/exercise.model";

export interface Plan {
    id: number;
    name: String;
    exercises: Exercise[]; 
    note: String;
};