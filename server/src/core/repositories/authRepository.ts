import { Credentials } from "../domain/entities/credentials"

export interface AuthRepository {
  login(credentials: Credentials): Promise<void>;
}