import {usePatientStore} from '../store'

export default function PacientesList() {


const patients = usePatientStore(state => state.patients)

const {removePatient} = usePatientStore()

const getId = usePatientStore(state => state.getPatientById)

  return (
    <div className=' mt-3'>
        {patients.length > 0 ?(
          patients.map(patient =>(
            <div>
              <p className=' font-bold text-2xl'>Lista de Pacientes:</p>
              <div className=' pacientes'>
              <p className=' font-bold text-lg py-2'>ID:{''} <span className='text-green-500'>{patient.id}</span></p>
              <p className=' font-bold text-lg py-2'>Nombre: {''} <span className='text-green-500'>{patient.name}</span></p>
              <p className=' font-bold text-lg py-2'>Propietario: {''} <span className='text-green-500'>{patient.propietario}</span></p>
              <p className=' font-bold text-lg py-2'  >Fecha de alta: {''} <span className='text-green-500'>{patient.date.toString()}</span></p>
              <p className=' font-bold text-lg py-2'> Sintomas:{''} <span className='text-green-500'>{patient.sintomas}</span></p>

              <div className=' flex justify-between items-center p-2 mt-4'>
              <button className=' bg-green-500 p-2 px-9 rounded-md text-white font-bold'
              onClick={() => getId(patient.id)}
              > Editar</button>
              <button
              onClick={() => removePatient(patient.id)}
              className='bg-red-500 p-2 px-9 rounded-md text-white font-bold'>Eliminar</button>
              </div>
              </div>
              
            
            </div>
          ))
          
        ) 
        
        : 
        <p className='  justify-center text-center font-semibold text-lg'>No hay pacientes agregados a la lista.</p>}
        
    </div>
  )
}
