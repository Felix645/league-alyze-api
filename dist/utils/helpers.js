"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const env = (key, defaults = null) => {
    let value = process.env[key] || defaults;
    const toInt = () => {
        return parseInt(value, 10);
    };
    const toString = () => {
        return String(value);
    };
    return {
        int: toInt,
        string: toString
    };
};
exports.default = env;
