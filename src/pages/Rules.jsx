import Navbar from '../components/Navbar'
import "./Rules.css"

function Rules() {

  return (
    <div>
      <Navbar />

      <h1>
        Rules Page
      </h1>

      <h2>
        For Impossidoku
      </h2>
      <ol className="list">
        <li>Each row must contain the numbers 1 through 9</li>
        <li>Each column must contain the numbers 1 through 9</li>
        <li>The 9x9 grid is divided into 9 3x3 subgrids, each of which must contain the numbers 1 through 9</li>
      </ol>
      <h2>
        For EZDoku
      </h2>
      <ol className="list">
        <li>Each row must contain the numbers 1 through 6</li>
        <li>Each column must contain the numbers 1 through 6</li>
        <li>The 6x6 grid is divided into 6 2x3 subgrids, each of which must contain the numbers 1 through 6</li>
      </ol>

      <h2>
        Credits
      </h2>
      <ul className="list">
        <li> <a className="contactlink" href="mailto:wang.zan@northeastern.edu"> wang.zan@northeastern.edu </a> </li>
        <li> <a className="contactlink" href="www.github.com/zwang252"> GitHub </a> </li>
        <li> <a className="contactlink" href="www.linkedin.com/in/zwang7441"> LinkedIn </a> </li>
      </ul>
    </div>
  )
}

export default Rules
