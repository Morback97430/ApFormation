var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Vehicule {
        constructor() {
            this.estDemarer = false;
            // défini le type de véhicule
            this.typeVehicule = this.constructor.name;
        }
        get typeVehicule() {
            return this._typeVehicule;
        }
        get capaciteReservoir() {
            return this._capaciteReservoir;
        }
        get niveauCarburant() {
            return this._niveauCarburant;
        }
        get consoCarburant() {
            return this._consoCarburant;
        }
        get vitesseMax() {
            return this._vitesseMax;
        }
        get klaxon() {
            return this._klaxon;
        }
        get pilot() {
            return this._pilot;
        }
        set typeVehicule(defTypeVeh) {
            this._typeVehicule = defTypeVeh;
        }
        set capaciteReservoir(capacite) {
            this._capaciteReservoir = capacite;
        }
        set niveauCarburant(niveau) {
            this._niveauCarburant = niveau;
        }
        set consoCarburant(conso) {
            this._consoCarburant = conso;
        }
        set vitesseMax(vitesse) {
            this._vitesseMax = vitesse;
        }
        set klaxon(son) {
            this._klaxon = son;
        }
        set pilot(pilot) {
            this._pilot = pilot;
        }
        initialiseCarburant() {
            this.niveauCarburant = Math.random() * this.capaciteReservoir;
        }
        rajoutCarburant(carburant) {
            this.niveauCarburant += carburant;
            this.niveauCarburant = (this.niveauCarburant > this.capaciteReservoir) ? this.capaciteReservoir : this.niveauCarburant;
        }
        consomeCarburant(carburant) {
            this.niveauCarburant -= carburant;
            this.niveauCarburant = (this.niveauCarburant <= 0) ? 0 : this.niveauCarburant;
            if (this.niveauCarburant == 0) {
                this.arreter();
            }
        }
        pleinEssence() {
            return __awaiter(this, void 0, void 0, function* () {
                while (this.niveauCarburant < this.capaciteReservoir) {
                    yield this.remplissage(1);
                }
                this.klaxonner();
                if (!this.pilot.enCour()) {
                    this.pilot.notifierPret();
                }
            });
        }
        remplissage(quantite) {
            this.rajoutCarburant(quantite);
            return new Promise(resolve => {
                setTimeout(resolve, 500);
            });
        }
        demarrer() {
            return __awaiter(this, void 0, void 0, function* () {
                this.estDemarer = true;
                while (this.estDemarer) {
                    yield this.vidage(0.1);
                }
            });
        }
        vidage(quantite) {
            this.consomeCarburant(quantite);
            return new Promise(resolve => {
                setTimeout(resolve, 1000);
            });
        }
        arreter() {
            this.estDemarer = false;
        }
        klaxonner() {
            console.log(this.klaxon);
        }
        pret() {
            return this.niveauCarburant == this.capaciteReservoir;
        }
        afficheType() {
            console.log(this.typeVehicule);
        }
        rouler() {
            if (this.estDemarer == true) {
                this.consomeCarburant(this.conso());
                this.pilot.avance(this.distance());
            }
            else if (this.niveauCarburant == 0) {
                this.pleinEssence();
                this.estDemarer = false;
            }
            else if (this.niveauCarburant == this.capaciteReservoir) {
                this.estDemarer = true;
            }
            //console.log(this.niveauCarburant);
        }
        distance() {
            return this.vitesseMax * 1000 / 3600000;
        }
        conso() {
            return this.consoCarburant * 1000 / 3600000;
        }
    }
    exports.default = Vehicule;
});
