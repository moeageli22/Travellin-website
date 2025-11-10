// User model for authentication and profile management

export interface User {
  id: string
  email: string
  password: string // hashed
  firstName: string
  lastName: string
  profilePicture?: string
  country?: string
  interests: string[]
  bio?: string
  createdAt: Date
  updatedAt: Date
}

export interface UserProfile {
  id: string
  email: string
  firstName: string
  lastName: string
  profilePicture?: string
  country?: string
  interests: string[]
  bio?: string
}

// Convert User to UserProfile (removes sensitive data)
export function toUserProfile(user: User): UserProfile {
  return {
    id: user.id,
    email: user.email,
    firstName: user.firstName,
    lastName: user.lastName,
    profilePicture: user.profilePicture,
    country: user.country,
    interests: user.interests,
    bio: user.bio,
  }
}
