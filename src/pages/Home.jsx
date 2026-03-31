import Navbar from '../components/Navbar'
import './Home.css'
import Logo from "../assets/Logo.png"

function Home() {

  console.log("getting homepage")

  return (
    <div>
      <Navbar />

      <h1>
        Home Page
      </h1>
      <h1>
        ZDoku!
      </h1>
      <div> 
        <img className="picture" src={Logo} />
        <h2>
          Welcome to ZDoku! This is my submission for the second project of CS5610!
        </h2>
      </div>
    </div>
  )
}

export default Home
