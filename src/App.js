import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"
import './App.css'
import Dashboard from "./components/Dashboard/Dashboard"

function App() {
  return (
    <div className="App">
      <Router>
        <div className="container">
          <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App
