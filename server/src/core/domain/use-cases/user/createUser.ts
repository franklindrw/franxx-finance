import { User } from "../../entities/user"
import type { UserRepository } from "../../../repositories/userRepository"

interface CreateUserReq {
  name: string
  email: string
  photo_url: string
}

export class CreateUser {
  private userRepository: UserRepository

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository
  }

  async execute(req: CreateUserReq): Promise<void> {
    const { name, email, photo_url } = req
    const user = new User(name, email, photo_url)
    await this.userRepository.create(user)

    return Promise.resolve()
  }
}
