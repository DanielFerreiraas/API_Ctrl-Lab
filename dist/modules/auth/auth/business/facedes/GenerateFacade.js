"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GeneratedNumerRegister {
    static generateNumberRegister() {
        const minChars = 8;
        const randomNumber = Math.floor(Math.pow(10, minChars - 1) +
            Math.random() * (Math.pow(10, minChars) - Math.pow(10, minChars - 1) - 1)).toString();
        return randomNumber;
    }
}
exports.default = GeneratedNumerRegister;
