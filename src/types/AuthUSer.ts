import type { User } from 'firebase/auth';

export interface AuthUser extends User {
  role?: string;
  loading?: boolean;
}
