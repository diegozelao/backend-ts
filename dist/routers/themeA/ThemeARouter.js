"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = require("express");
const ThemeAController_1 = __importDefault(require("../../controllers/ThemeAController"));
class ThemeARouter {
    constructor() {
        this._router = (0, express_1.Router)();
        this._controller = ThemeAController_1.default;
        this._configure();
    }
    get router() {
        return this._router;
    }
    /**
     * Connect routes to their matching controller endpoints.
     */
    _configure() {
        this._router.get('/', (req, res, next) => {
            try {
                const result = this._controller.defaultMethod();
                res.status(200).json(result);
            }
            catch (error) {
                next(error);
            }
        });
    }
}
module.exports = new ThemeARouter().router;
