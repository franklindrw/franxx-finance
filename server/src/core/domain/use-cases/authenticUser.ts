import { Credentials } from "../entities/credentials"
import type { AuthRepository } from "../../repositories/authRepository"

interface AuthenticUserReq {
  username: string
  password: string
}

export class AuthenticUser {
  private authRepository: AuthRepository

  constructor(authRepository: AuthRepository) {
    this.authRepository = authRepository
  }

  async execute(req: AuthenticUserReq): Promise<void> {
    const { username, password } = req
    const credentials = new Credentials(username, password)
    await this.authRepository.login(credentials)

    return Promise.resolve()
  }
}
