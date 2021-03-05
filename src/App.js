import './App.css';
import Login from './components/auth/Login'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import AuthState from './context/auth/AuthState'



function App() {
  return (
    <div>

    <AuthState>
        <Router>
            <Switch>
              <Route exact path="/login" component={Login}/>          
            </Switch>

        </Router>
    </AuthState>
      
    </div>
  );
}

export default App;
