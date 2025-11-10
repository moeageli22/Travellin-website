// Main API routes configuration
import { AuthController } from "../controllers/authController"
import { HotelController } from "../controllers/hotelController"
import { GroupController } from "../controllers/groupController"
import { authMiddleware } from "../middleware/auth"

const authController = new AuthController()
const hotelController = new HotelController()
const groupController = new GroupController()

export const apiRoutes = {
  // Authentication routes
  "POST /api/auth/register": authController.register,
  "POST /api/auth/login": authController.login,

  // Hotel routes
  "GET /api/hotels": hotelController.getAllHotels,
  "GET /api/hotels/:id": hotelController.getHotelById,
  "POST /api/bookings": [authMiddleware, hotelController.createBooking],

  // Group routes
  "GET /api/groups": groupController.getAllGroups,
  "POST /api/groups/:id/join": [authMiddleware, groupController.joinGroup],
  "GET /api/groups/:id/messages": groupController.getGroupMessages,
  "POST /api/groups/:id/messages": [authMiddleware, groupController.sendMessage],
}
