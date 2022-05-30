type Plan = {
    id: number;
    name: String;
    // Array muss hier rein
    exercises: Exercise[]; 
    note: String;
};