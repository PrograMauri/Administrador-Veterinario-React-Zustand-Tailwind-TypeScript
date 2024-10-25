
import {useForm} from 'react-hook-form'
import Error from './Error'
import { patientForm } from '../types/type'
import { usePatientStore } from '../store'
import { useEffect } from 'react'
import {toast} from 'react-toastify'

export default function PacientesForm() {

    const {register,handleSubmit,setValue,formState:{errors},reset} = useForm<patientForm>()

    const {addPatient,activeId,patients,updatedPatient} = usePatientStore()

   useEffect(() =>{
        if(activeId){
           const patientId = patients.filter(patient => patient.id === activeId)[0]
           console.log(patientId)

           setValue('name',patientId.name)     
           setValue('propietario',patientId.propietario)     
           setValue('email',patientId.email)     
           setValue('date',patientId.date)     
           setValue('sintomas',patientId.sintomas)     
        }
   },[activeId])
    
    const registerAnimal = ( data : patientForm ) =>{
        if(activeId){
            updatedPatient(data)
            toast.success('El paciente se editó con exito.')
        }else{
            addPatient(data)
            toast.success('El paciente se agregó correctamente.')
        }
       
        reset()
    } 
    useEffect(() =>{
        
    },[registerAnimal])

  return (
    <div className=" form-section m-4">
    

        <form 
            className="bg-white shadow-md rounded-lg py-10 px-5 mb-10 w-full"
            noValidate
            onSubmit={handleSubmit(registerAnimal)}
        >
              <div className="mb-5">
                  <label htmlFor="name" className="text-sm uppercase font-bold">
                      Paciente 
                  </label>
                  <input  
                      id="name"
                      className="w-full p-3  border border-gray-100"  
                      type="text" 
                      placeholder="Nombre del Animal" 
                      {...register('name',{
                        required:'El nombre del animal es obligatorio'
                      })}
                  />
              </div>

              {errors.name &&(
                <Error>
                    {errors.name.message as string}    
                </Error>
              )}

              <div className="mb-5">
                <label htmlFor="caretaker" className="text-sm uppercase font-bold">
                    Propietario 
                </label>
                <input  
                    id="propietario"
                    className="w-full p-3  border border-gray-100"  
                    type="text" 
                    placeholder="Nombre del Propietario" 
                    {...register('propietario',{
                        required:'El nombre del propietario es obligatorio'
                    })}
                />
              </div>
              {errors.propietario &&(
                <Error>
                    {errors.propietario.message as string}
                </Error>
              )}

            <div className="mb-5">
              <label htmlFor="email" className="text-sm uppercase font-bold">
                  Email 
              </label>
              <input  
                  id="email"
                  className="w-full p-3  border border-gray-100"  
                  type="email" 
                  placeholder="Email de Registro" 
                  {...register('email',{
                    required: 'El email es obligatorio',
                    pattern:{
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Email no válido'
                    }
                  })}
              />
            </div>
            {errors.email &&(
                <Error>
                    {errors.email.message as string}
                </Error>
              )}
            <div className="mb-5">
                <label htmlFor="date" className="text-sm uppercase font-bold">
                    Fecha Alta 
                </label>
                <input  
                    id="date"
                    className="w-full p-3  border border-gray-100"  
                    type="date" 
                    {...register('date',{
                        required:'Ingresar la fecha es obligatorio'
                    })}
                />
            </div>
            {errors.date &&(
                <Error>
                    {errors.date.message as string}
                </Error>
              )}
            
            <div className="mb-5">
                <label htmlFor="symptoms" className="text-sm uppercase font-bold">
                Síntomas 
                </label>
                <textarea  
                    id="sintomas"
                    className="w-full p-3  border border-gray-100"  
                    placeholder="Síntomas del paciente" 
                    {...register('sintomas',{
                        required:'Ingresar los sintomas es obligatorio.'
                    })}
                ></textarea>
            </div>
            {errors.sintomas &&(
                <Error>
                    {errors.sintomas.message as string}
                </Error>
              )}

            <input
                type="submit"
                className="bg-green-500 w-full p-3 text-white uppercase font-bold hover:bg-green-700 cursor-pointer transition-colors"
                value='Guardar Paciente'
           
            />
        </form> 
    </div>
  )

  
}
