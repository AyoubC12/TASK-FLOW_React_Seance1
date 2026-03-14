import { useAuth } from './features/auth/AuthContext'
import Login from './features/auth/Login'
import Dashboard from './page/Dashboard'

export default function App() {

 const { state } = useAuth()

 if (!state.user) {
  return <Login />
 }

 return <Dashboard />

}
