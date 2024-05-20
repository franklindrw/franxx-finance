import { User } from '../domain/entities/user'

export interface UserRepository {
  create(user: User): Promise<void>;
  update(user: User): Promise<void>;
  delete(user: User): Promise<void>;
  findUserByEmail(email: string): Promise<User | null>;
  findUserById(id: string): Promise<User | null>;
}
