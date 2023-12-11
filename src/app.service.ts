import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World From Mangalam Kumar owner of this nestjs project';
  }
}
