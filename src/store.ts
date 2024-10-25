 import {create} from 'zustand'
import { Patient, patientForm } from './types/type'
import {v4 as uuidv4} from 'uuid'
import {toast} from 'react-toastify'
import {persist,createJSONStorage} from 'zustand/middleware'

type patientState = {
    patients: Patient[],
    addPatient: (data : patientForm ) => void,
    removePatient:(id : Patient['id']) => void,
    activeId: Patient['id'],
    getPatientById: (id : Patient['id']) => void,
    updatedPatient: (data : patientForm) => void
}

const createPatient = (patient: patientForm) : Patient =>{
    return{
        ...patient,
        id: uuidv4()
    }
}

 export const usePatientStore = create<patientState>()(persist((set) =>({
  patients:[],
  activeId:'',
    addPatient:(data) =>{
        const newPatient = createPatient(data)

        console.log(data,'Agregando paciente...')
       
        set((state) =>({
            
            patients:[...state.patients,newPatient]
           
        }))
    },
    removePatient: (id) =>{

        toast.error('El paciente se eliminó correctamente.')
        set((state) =>({
            patients: state.patients.filter(patients => patients.id !== id)
            
        }))
    },
    getPatientById: (id) =>{

        console.log(id)
        set(() =>({
            activeId:id
        }))
    },
    updatedPatient:(data) =>{
        set((state) =>({
            patients: state.patients.map(patient => patient.id === state.activeId ?{id:state.activeId, ...data} : patient),
            activeId:''
        }))
    }
 }),{
    name:'patient-storage',
    storage:createJSONStorage(() => sessionStorage)
 }))



