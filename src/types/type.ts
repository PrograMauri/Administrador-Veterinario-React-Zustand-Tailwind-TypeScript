

export type Patient = {
    id:string,
    name:string,
    paciente:string,
    propietario:string,
    email:string,
    date:Date,
    sintomas:string

}

export type patientForm = Omit<Patient,'id'>