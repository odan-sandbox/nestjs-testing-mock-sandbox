import { Controller, Get, Inject } from "@nestjs/common";
import { AppService } from "./app.service";

@Controller()
export class AppController {
  constructor(@Inject(AppService) private service: AppService) {}
  @Get("/health")
  health(): { ok: boolean } {
    console.log(this.service.getText());
    return { ok: true };
  }
}
