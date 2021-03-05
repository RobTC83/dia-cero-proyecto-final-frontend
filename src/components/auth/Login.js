import React,{useState} from 'react'


export default function Login() {

const [userLogin,setUserLogin] = useState(
    {
        email:"",
        password:""

    })


    function handleChange(event){

        setUserLogin({
            ...userLogin,
            [event.target.name]: event.target.value
        })
        console.log("el userLogin es: ",userLogin)
    }

    function logUser(event){

        event.preventDefault()

        
    }

    return (
      <div>
        <form action="/login" method="POST">
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">
              @
            </span>
            <input
              type="email"
              name="email"
              class="form-control"
              placeholder="tu correo electrónico"
              aria-label="email"
              aria-describedby="basic-addon1"
              value={userLogin.name}
              onChange={(e)=>handleChange(e)}
            />
          </div>

          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">
              ***
            </span>
            <input
              type="password"
              name="password"
              class="form-control"
              placeholder="tu contraseña"
              aria-label="Username"
              aria-describedby="basic-addon1"
              value={userLogin.password}
              onChange={(e)=>handleChange(e)}
            />
          </div>

          <div class="d-grid gap-2 col-6 mx-auto">
            <button onClick={(e)=>logUser(e)} type="submit" class=" btn btn-primary">
              Iniciar sesión
            </button>
          </div>
        </form>
      </div>
    );
}
