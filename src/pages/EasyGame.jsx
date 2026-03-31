import Navbar from '../components/Navbar'
import Board from '../components/Board'
import SudokuProvider from '../context/SudokuProvider'
import "./EasyGame.css"

function EasyGame() {

  return (
    <div>
      <Navbar />

      <h1>
        Easy Game Page
      </h1>
      
      <SudokuProvider size={6}>
        <Board />
      </SudokuProvider>
    </div>
  )
}

export default EasyGame
