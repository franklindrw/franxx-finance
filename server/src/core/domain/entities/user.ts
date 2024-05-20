export class User {
  name: string
  email: string
  photo_url: string

  constructor(name: string, email: string, photo_url: string) {
    this.name = name
    this.email = email
    this.photo_url = photo_url
  }
}