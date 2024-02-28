import { useState } from 'react'
import './App.css'

//importando modulos de firebase
import appFirebase from './firebaseConfig/firebase'
import { fetAut, getAuth, onAuthStateChanged } from 'firebase/auth'
const auth = getAuth (appFirebase)

// importar componente
import Login from './components/Login'
import Home from './components/Home'


function App() {

  const [usuario, setUsuario] = useState(null)

  onAuthStateChanged(auth, (usuarioFirebase) => {
    if (usuarioFirebase) {
      setUsuario(usuarioFirebase)
    }
    else 
    {
      setUsuario(null)
    }
  })

  return (
    <div>
      {usuario ? <Home correoUsuario= {usuario.email} /> : <Login />}
    </div>
  )
}

export default App
