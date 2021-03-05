import './App.css';
import Login from './components/auth/Login'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import AuthState from './context/auth/AuthState'

import Registro from './pages/Registro'
import RegistroExitoso from './pages/RegistroExitoso'
import IniciarSesion from './pages/IniciarSesion'
import EditarPerfil from './pages/EditarPerfil'

import Tablero from './pages/Tablero'
import Transaccion from './pages/Transaccion'
import Graficas from './pages/Graficas'

import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Ingresos from './components/Ingresos'
import Presupuestos from './components/Presupuestos'






function App() {
  return (
    <div>

    <AuthState>
        <Router>
            <Switch>
              <Route exact path="/login" component={Login}/> 
              <Route exact path="/registro" component={Registro}/> 
              <Route exact path="/registro-exitoso" component={RegistroExitoso}/> 
              <Route exact path="/iniciar-sesion" component={IniciarSesion}/> 
              <Route exact path="/:id/editar" component={EditarPerfil}/> 

              <Route exact path="/:id/tablero" component={Tablero}/> 
              <Route exact path="/:id/transaccion" component={Transaccion}/> 
              <Route exact path="/:id/graficas" component={Graficas}/>
            </Switch>

            <Header/>
            <Sidebar/>
            <Ingresos/>
            <Presupuestos/>


        </Router>
    </AuthState>
      
    </div>
  );
}

export default App;
