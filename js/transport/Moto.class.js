var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./Vehicule.class"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const Vehicule_class_1 = __importDefault(require("./Vehicule.class"));
    class Moto extends Vehicule_class_1.default {
        constructor() {
            super();
            this.klaxon = "bip (de Moto)";
            this.capaciteReservoir = 30;
            this.initialiseCarburant();
            this.defineConso();
            this.defineVitesseMax();
        }
        defineConso() {
            this.consoCarburant = Math.random() * 8 + 12;
        }
        defineVitesseMax() {
            this.vitesseMax = Math.random() * 50 + 200;
        }
    }
    exports.default = Moto;
});
