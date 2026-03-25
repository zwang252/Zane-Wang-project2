import Navbar from '../components/Navbar'
import "./Scores.css"

function Scores() {

  return (
    <div>
      <Navbar />

      <h1>
            High Score Page
        </h1>
        <table>
          <thead>
            <tr>
                <th>Name</th>
                <th>Easy Games Solved</th>
                <th>Hard Games Solved</th>
            </tr>
          </thead>
          <tbody>
            <tr>
                <td>Kuro</td>
                <td>123</td>
                <td>243</td>
            </tr>
            <tr>
                <td>Ash</td>
                <td>117</td>
                <td>238</td>
            </tr>
            <tr>
                <td>Cyrus</td>
                <td>115</td>
                <td>239</td>
            </tr>
            <tr>
                <td>Mnigo</td>
                <td>114</td>
                <td>223</td>
            </tr>
            <tr>
                <td>Ref</td>
                <td>102</td>
                <td>198</td>
            </tr>
            <tr>
                <td>Kyo</td>
                <td>208</td>
                <td>32</td>
            </tr>
            <tr>
                <td>Kakuzu</td>
                <td>0</td>
                <td>185</td>
            </tr>
            <tr>
                <td>Cynthia</td>
                <td>64</td>
                <td>117</td>
            </tr>
            <tr>
                <td>Ian</td>
                <td>103</td>
                <td>25</td>
            </tr>
            <tr>
                <td>HDZ</td>
                <td>63</td>
                <td>62</td>
            </tr>
          </tbody>
        </table>
    </div>
  )
}

export default Scores
