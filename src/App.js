import { Route, Routes } from 'react-router-dom'
import LoginPage from './pages/Login/LoginPage'
import RegisterPage from './pages/Register/RegisterPage'
import './styles/stylesGlobals.scss'
import ProfilePage from './pages/Profile/ProfilePage'
import HomePage from './pages/Home/HomePage'
import SupportPage from './pages/Support/SupportPage'
import DeliveriesPage from './pages/Deliveries/DeliveriesPage'
import OrderManagementPage from './pages/OrderManagement/OrderManagementPage'
import StockPage from './pages/Stock/StockPage'
import ChatPage from './pages/Chat/ChatPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/chat" element={<ChatPage />} />
      <Route path="/stock" element={<StockPage />} />
      <Route path="/deliveries" element={<DeliveriesPage />} />
      <Route path="/order-management" element={<OrderManagementPage />} />
      <Route path="/home"element={<HomePage />} />
      <Route path="/support"element={<SupportPage />} />
    </Routes>
  )
}
