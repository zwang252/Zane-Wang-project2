import Navbar from '../components/Navbar'
import {Link} from "react-router-dom"
import "./Games.css"

function Games() {
  return (
    <div>
      <Navbar />

      <h1>
        Selection Page
      </h1>
      <table>
        <thead>
        <tr> 
          <th> Game </th>
          <th> Author </th> 
        </tr>
        </thead>
        <tbody>
        <tr>
          <td> <p> <Link className="gamelink" to="/games/normal/"> Impossidoku </Link> </p> </td>
          <td> <p> RaFY </p> </td>
        </tr>
        <tr>
          <td> <p> <Link className="gamelink" to="/games/easy/"> EZDoku </Link> </p> </td>
          <td> <p> RaFY </p> </td>
        </tr>
        <tr>
          <td> <p> <Link className="gamelink" to="/games/normal/"> Stellar </Link> </p> </td>
          <td> <p> Kuro </p> </td>
        </tr>
        <tr>
          <td> <p> <Link className="gamelink" to="/games/normal/"> Minecraft </Link> </p> </td>
          <td> <p> Jim </p> </td>
        </tr>
        <tr>
          <td> <p> <Link className="gamelink" to="/games/normal/"> Galaxy Shooters </Link> </p> </td>
          <td> <p> Daun </p> </td>
        </tr>
        <tr>
          <td> <p> <Link className="gamelink" to="/games/easy/"> Pac Man </Link> </p> </td>
          <td> <p> Toru </p> </td>
        </tr>
        <tr>
          <td> <p> <Link className="gamelink" to="/games/normal/"> League </Link> </p> </td>
          <td> <p> Ash </p> </td>
        </tr>
        <tr>
          <td> <p> <Link className="gamelink" to="/games/normal/"> Baseball Legion </Link> </p> </td>
          <td> <p> Ref </p> </td>
        </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Games
