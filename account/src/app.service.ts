import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  ping(data: any) {
    console.log('pong in accounts');
    return data;
  }
}
