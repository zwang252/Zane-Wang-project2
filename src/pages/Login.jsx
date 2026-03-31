import Navbar from '../components/Navbar'
import "./Login.css"

function Login() {

  return (
    <div>
      <Navbar />

      <h1>
        Login Page
      </h1>
      <span> Username: <input /> </span>
      <span> Password: <input type="password"/> </span>
      <span> <button> Submit </button> </span>
    </div>
  )
}

export default Login
