var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./Course.class", "./participant/Participant.class", "./transport/Voiture.class", "./transport/Moto.class", "./transport/Camion.class"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const Course_class_1 = __importDefault(require("./Course.class"));
    const Participant_class_1 = __importDefault(require("./participant/Participant.class"));
    const Voiture_class_1 = __importDefault(require("./transport/Voiture.class"));
    const Moto_class_1 = __importDefault(require("./transport/Moto.class"));
    const Camion_class_1 = __importDefault(require("./transport/Camion.class"));
    let courseDeFou = new Course_class_1.default();
    let nbParticipant = 6;
    inscriptionParticipant(nbParticipant);
    aff("Plein de tous les concurents");
    // Functions
    function aff(obj) {
        console.log(obj);
    }
    function inscriptionParticipant(nbParticipant = 2) {
        let listParticipant = [];
        let listVehicule = [];
        for (let newPerson = 0; newPerson < nbParticipant; newPerson++) {
            let nouveauVehicule;
            // Rajout aléatoire de vehicule
            let randomVeh = Math.floor(Math.random() * 3 + 1);
            if (randomVeh == 1) {
                nouveauVehicule = new Moto_class_1.default();
            }
            else if (randomVeh == 2) {
                nouveauVehicule = new Camion_class_1.default();
            }
            else {
                nouveauVehicule = new Voiture_class_1.default();
            }
            //Inscrit et ratache une Participant à son Vehicule
            let personnePilot = new Participant_class_1.default();
            listParticipant.push(personnePilot);
            personnePilot.vehicule = nouveauVehicule;
            nouveauVehicule.pilot = personnePilot;
            listVehicule.push(nouveauVehicule);
        }
        courseDeFou.listParticipant = listParticipant;
        for (let vehicule of listVehicule) {
            vehicule.pleinEssence();
        }
    }
});
