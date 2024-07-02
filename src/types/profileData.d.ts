export interface ProfileEditableData {
  name: string
  phone: string
}

export interface ProfileData extends ProfileEditableData {
  email: string
}
