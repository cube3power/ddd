import { Test } from "@nestjs/testing";
import { INestApplication, HttpStatus, ExecutionContext } from "@nestjs/common";
import request from "supertest";
import { MorganModule } from "nest-morgan";
import { ACGuard } from "nest-access-control";
import { BasicAuthGuard } from "../../auth/basicAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { HzWaterMeterController } from "../hzWaterMeter.controller";
import { HzWaterMeterService } from "../hzWaterMeter.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  createdAt: new Date(),
  id: "exampleId",
  installAddress: "exampleInstallAddress",
  installDate: new Date(),
  isTotal: "true",
  lastUpdateTime: new Date(),
  lat: 42.42,
  lon: 42.42,
  manufacture: "exampleManufacture",
  meterId: "exampleMeterId",
  meterName: "exampleMeterName",
  notes: "exampleNotes",
  pressure: 42.42,
  totalValue: 42.42,
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  createdAt: new Date(),
  id: "exampleId",
  installAddress: "exampleInstallAddress",
  installDate: new Date(),
  isTotal: "true",
  lastUpdateTime: new Date(),
  lat: 42.42,
  lon: 42.42,
  manufacture: "exampleManufacture",
  meterId: "exampleMeterId",
  meterName: "exampleMeterName",
  notes: "exampleNotes",
  pressure: 42.42,
  totalValue: 42.42,
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    createdAt: new Date(),
    id: "exampleId",
    installAddress: "exampleInstallAddress",
    installDate: new Date(),
    isTotal: "true",
    lastUpdateTime: new Date(),
    lat: 42.42,
    lon: 42.42,
    manufacture: "exampleManufacture",
    meterId: "exampleMeterId",
    meterName: "exampleMeterName",
    notes: "exampleNotes",
    pressure: 42.42,
    totalValue: 42.42,
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  createdAt: new Date(),
  id: "exampleId",
  installAddress: "exampleInstallAddress",
  installDate: new Date(),
  isTotal: "true",
  lastUpdateTime: new Date(),
  lat: 42.42,
  lon: 42.42,
  manufacture: "exampleManufacture",
  meterId: "exampleMeterId",
  meterName: "exampleMeterName",
  notes: "exampleNotes",
  pressure: 42.42,
  totalValue: 42.42,
  updatedAt: new Date(),
};

const service = {
  create() {
    return CREATE_RESULT;
  },
  findMany: () => FIND_MANY_RESULT,
  findOne: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

describe("HzWaterMeter", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: HzWaterMeterService,
          useValue: service,
        },
      ],
      controllers: [HzWaterMeterController],
      imports: [MorganModule.forRoot(), ACLModule],
    })
      .overrideGuard(BasicAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /hz-water-meters", async () => {
    await request(app.getHttpServer())
      .post("/hz-water-meters")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        installDate: CREATE_RESULT.installDate.toISOString(),
        lastUpdateTime: CREATE_RESULT.lastUpdateTime.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /hz-water-meters", async () => {
    await request(app.getHttpServer())
      .get("/hz-water-meters")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          installDate: FIND_MANY_RESULT[0].installDate.toISOString(),
          lastUpdateTime: FIND_MANY_RESULT[0].lastUpdateTime.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /hz-water-meters/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/hz-water-meters"}/${nonExistingId}`)
      .expect(404)
      .expect({
        statusCode: 404,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /hz-water-meters/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/hz-water-meters"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        installDate: FIND_ONE_RESULT.installDate.toISOString(),
        lastUpdateTime: FIND_ONE_RESULT.lastUpdateTime.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
