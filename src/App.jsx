import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Games from "./pages/Games"
import EasyGame from "./pages/EasyGame"
import NormalGame from "./pages/NormalGame"
import Scores from "./pages/Scores"
import Rules from "./pages/Rules"
import Login from "./pages/Login"
import Register from "./pages/Register"

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Games />} />
        <Route path="/games/easy" element={<EasyGame />} />
        <Route path="/games/normal" element={<NormalGame />} />
        <Route path="/scores" element={<Scores />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
