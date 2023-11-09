import { Route, Routes } from "react-router-dom"
import { ForgetPassword, Home, Login, Otm } from "./pages/"

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/forget" element={<ForgetPassword />} />
      <Route path="/otm" element={<Otm />} />
      <Route path="/" element={<Home />} />
    </Routes>
  )
}

export default App
