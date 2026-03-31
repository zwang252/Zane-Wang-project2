import Navbar from '../components/Navbar'
import Board from '../components/Board'
import SudokuProvider from '../context/SudokuProvider'
import "./NormalGame.css"

function NormalGame() {

  return (
    <div>
      <Navbar />

      <h1>
        Normal Game Page
      </h1>
      <h1>
            Impossidoku
      </h1>
      <SudokuProvider size={9}>
        <Board />
      </SudokuProvider>
    </div>
  )
}

export default NormalGame
