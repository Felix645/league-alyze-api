"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./routes/index"));
const getServer = () => {
    const app = (0, express_1.default)();
    app.get('/', (req, res) => {
        res.json({
            'message': 'Hello World!',
            'data': null
        });
    });
    app.use('/api', index_1.default);
    return app;
};
exports.default = getServer;
