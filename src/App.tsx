import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import HotelsPage from './pages/HotelsPage'
import HotelDetailPage from './pages/HotelDetailPage'
import GroupsPage from './pages/GroupsPage'
import WellbeingPage from './pages/WellbeingPage'
import ConciergePage from './pages/ConciergePage'
import SignInPage from './pages/SignInPage'
import SignUpPage from './pages/SignUpPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/hotels" element={<HotelsPage />} />
      <Route path="/hotels/:id" element={<HotelDetailPage />} />
      <Route path="/groups" element={<GroupsPage />} />
      <Route path="/wellbeing" element={<WellbeingPage />} />
      <Route path="/concierge" element={<ConciergePage />} />
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/signup" element={<SignUpPage />} />
    </Routes>
  )
}

export default App
