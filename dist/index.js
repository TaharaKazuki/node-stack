"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const fastify = fastify_1.default({ logger: true });
fastify.get('/', async () => {
    return {
        hello: 'world',
    };
});
const port = process.env.PORT ?? 8080;
const start = async () => {
    try {
        await fastify.listen(port, '0.0.0.0');
    }
    catch (error) {
        fastify.log.error(error);
        process.exit(1);
    }
};
start();
