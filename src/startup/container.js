const { createContainer, asClass, asValue, asFunction } = require("awilix");

//service
const { HomeService } = require("../services");

//controller
const { HomeController } = require("../controllers");

//router
const { HomeRouters } = require("../routes/index.routes");
//Rutas
const Routes = require("../routes");
//config
const config = require("../config");
const app = require(".");

const container = createContainer();

container
    .register({
        app: asClass(app).singleton(),
        router: asFunction(Routes).singleton(),
        config: asValue(config)
    })
    .register({
        HomeService: asClass(HomeService).singleton(),
    })
    .register({
        HomeController: asClass(HomeController.bind(HomeController)).singleton(),
    }).register({
        HomeRouters: asClass(HomeRouters).singleton(),
    });

module.exports = container;