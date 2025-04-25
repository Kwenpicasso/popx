import './App.css'
import { Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import CreateAccount from './pages/CreateAccount'
import Login from './pages/Login'
import Profile from './pages/Profile'
function App() {

  return (
  <>
    <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/register" element={<CreateAccount />} />
    <Route path="/login" element={<Login />} />
    <Route path="/profile" element={<Profile />} />
    </Routes>
  </>
  )
}

export default App
