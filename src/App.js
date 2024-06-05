import { Route, Routes } from 'react-router-dom'
import LoginPage from './pages/Login/LoginPage'
import RegisterPage from './pages/Register/RegisterPage'
import './styles/stylesGlobals.scss'
import ProfilePage from './pages/Profile/ProfilePage'
import CartPage from './pages/Cart/CartPage'
import PaymentPage from './pages/Payment/PaymentPage'
import OrderPage from './pages/Order/OrderPage'
import TrackOrderPage from './pages/TrackOrder/TrackOrder'
import FeedbackPage from './pages/Feedback/FeedbackPage'
import NotificationPage from './pages/Notification/NotificationPage'
import LocationPage from './pages/Location/LocationPage'
import HomePage from './pages/Home/HomePage'
import SocialPage from './pages/Social/SocialPage'
import SupportPage from './pages/Support/SupportPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/payment" element={<PaymentPage />} />
      <Route path="/order" element={<OrderPage />} />
      <Route path="/track-order" element={<TrackOrderPage />} />
      <Route path="/feedback" element={<FeedbackPage />} />
      <Route path="/notification" element={<NotificationPage />} />
      <Route path="/location"element={<LocationPage />} />
      <Route path="/home"element={<HomePage />} />
      <Route path="/social"element={<SocialPage />} />
      <Route path="/support"element={<SupportPage />} />
    </Routes>
  )
}
