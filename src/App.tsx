import './App.css'
import PacientesList from './components/PacientesList'
import PacientesForm from './components/PacientesForm'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/ReactToastify.css'
function App() {


  return (
    <>
    <div>
      <h1 className=' text-green-500 text-center p-7 text-4xl font-bold'>
      Administrador de Veterinaria
      </h1>
    </div>
    <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

<p className="text-lg mt-5 text-center mb-10">
    Añade Animales y {''}
    <span className="text-green-500 font-bold">Administralos</span>
</p>
     <div className=' section grid grid-cols-2 '>
          <PacientesForm

          />

          <PacientesList

          />
     </div>

     <ToastContainer
      position="bottom-left"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
     />
    </>
  )
}

export default App
