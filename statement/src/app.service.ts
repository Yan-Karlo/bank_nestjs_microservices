import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  ping(data: any) {
    return data;
  }
}
