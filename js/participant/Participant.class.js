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
    class Participant {
        constructor() {
            this._distanceParcouru = 0;
            this._surCircuit = undefined;
        }
        get course() {
            return this._course;
        }
        get vehicule() {
            return this._vehicule;
        }
        get distance() {
            return this._distanceParcouru;
        }
        set vehicule(vehicule) {
            this._vehicule = vehicule;
        }
        affecterCourse(course) {
            this._course = course;
        }
        demarrer() {
            this.vehicule.demarrer();
        }
        enCour() {
            return this.course.enCour;
        }
        notifierPret() {
            this.course.notifierPret();
        }
        accelerer() {
            this._surCircuit = setInterval(() => {
                this.vehicule.rouler();
            });
        }
        freiner() {
            clearInterval(this._surCircuit);
        }
        avance(distance) {
            this._distanceParcouru += distance;
            this.course.avancementCourse(this);
            console.log(this._distanceParcouru);
        }
        stopCourse() {
            this.freiner();
            this.vehicule.arreter();
        }
    }
    exports.default = Participant;
});
