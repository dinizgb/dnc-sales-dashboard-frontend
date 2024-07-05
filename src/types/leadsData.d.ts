export interface LeadsPostData {
  name: string
  email: string
  phone: string
}

export interface LeadsData extends LeadsPostData {
  id: number
}
