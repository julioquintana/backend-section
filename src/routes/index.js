const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");
require("express-async-errors");
const { NotFoundMiddleware, ErrorMiddleware, ResponseTime, } = require("../middlewares")

module.exports = function({ HomeRouters }) {
    const router = express.Router();
    const apiRoutes = express.Router();

    apiRoutes
        .use(express.json())
        .use(cors())
        .use(helmet())
        .use(compression());

    apiRoutes.use("/home", HomeRouters);
    router.use("/v1/api", apiRoutes);

    router.use(ResponseTime);
    router.use(NotFoundMiddleware);
    router.use(ErrorMiddleware);
    return router;
}