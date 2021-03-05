import React from 'react'

export default function Login() {
    return (
      <div>
        <form action="/ingresa" method="POST">
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
            />
          </div>

          <div class="d-grid gap-2 col-6 mx-auto">
            <button type="submit" class=" btn btn-primary ">
              Iniciar sesión
            </button>
          </div>
        </form>
      </div>
    );
}
