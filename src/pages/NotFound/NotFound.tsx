import { Link } from 'react-router-dom'

const NotFound = () => (
  <div className="container p-5">
    <div className="row">
      <div className="col-md-12">
        <div className="text-center">
          <h1>Oops!</h1>
          <h2>404 Not Found</h2>
          <div className="m-3">
            Lo sentimos, se ha producido un error, <br />
            ¡la página solicitada no se ha encontrado!
          </div>
          <div className="pt-4">
            <Link to="/" className="btn btn-primary btn-lg">
              <span>&#x1F3E0;</span>
              Ir a Inicio
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default NotFound
