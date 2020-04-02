import { Test, TestingModule } from "@nestjs/testing";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";

describe("App Controller", () => {
  let controller: AppController;
  let service: jest.Mocked<AppService>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        {
          provide: AppService,
          useFactory: (): jest.Mocked<AppService> => {
            const Mock = jest.requireMock("./app.service").AppService;
            return new Mock();
          }
        }
      ]
    }).compile();
    controller = module.get<AppController>(AppController);
    service = module.get<jest.Mocked<AppService>>(AppService.name);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });

  it("should be call health", () => {
    expect(controller.health()).toBeDefined();
    expect(service.getText).toBeCalled();
  });
});
