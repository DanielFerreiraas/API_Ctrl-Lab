"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const baseRoutes = (controller) => {
    const router = (0, express_1.Router)();
    router.get('/count', (req, res) => controller.countItems(req, res));
    router.get('/', (req, res) => controller.getItems(req, res));
    router.get('/:id', (req, res) => controller.getItemById(req, res));
    router.get('/:field/:value', (req, res) => controller.getItemByField(req, res));
    router.post('/', (req, res) => controller.createItem(req, res));
    router.put('/:id', (req, res) => controller.updateItem(req, res));
    router.delete('/:id', (req, res) => controller.deleteItem(req, res));
    return router;
};
exports.default = baseRoutes;
