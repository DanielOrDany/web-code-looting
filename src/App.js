import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"
import './App.css'
import Dashboard from "./components/Dashboard/Dashboard"
import Terms from "./views/Terms"
import RefundPolicy from "./views/RefundPolicy"

function App() {
  return (
    <div className="App">
      <Router>
        <div className="container">
          <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/return-policy" element={<RefundPolicy />} />
              <Route path="/terms-of-service" element={<Terms />} />
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App
