export class Credentials {
  username: string
  password: string

  constructor(username: string, password: string) {
    this.username = username
    this.password = password
  }

  getUsername(): string {
    return this.username
  }

  checkPassword(inputPassword: string): boolean {
    return this.password === inputPassword
  }
}
