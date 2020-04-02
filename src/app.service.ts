import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  public getText(): string {
    return "hello";
  }
}
