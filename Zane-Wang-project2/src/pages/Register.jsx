import Navbar from '../components/Navbar'
import "./Register.css"

function Register() {

  return (
    <div>
      <Navbar />

      <h1>
        Register Page
      </h1>
      <span> Username: <input /> </span>
      <span> Password: <input type="password"/> </span>
      <span> Verify Password: <input type="password" /> </span>
      <span> <button> Submit </button> </span>
    </div>
  )
}

export default Register
