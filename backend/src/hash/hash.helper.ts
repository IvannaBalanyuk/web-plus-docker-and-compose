import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class HashHelper {
  getHash(password: string) {
    return bcrypt.hash(password, 10);
  }

  compare(password: string, userPassword: string) {
    return bcrypt.compare(password, userPassword);
  }
}
