// Group/Community model for social features

export interface Group {
  id: string
  name: string
  description: string
  category: string
  icon: string
  memberCount: number
  createdAt: Date
  updatedAt: Date
}

export interface GroupMember {
  id: string
  groupId: string
  userId: string
  role: "admin" | "moderator" | "member"
  joinedAt: Date
}

export interface GroupMessage {
  id: string
  groupId: string
  userId: string
  content: string
  type: "text" | "image" | "file"
  imageUrl?: string
  fileUrl?: string
  createdAt: Date
}
