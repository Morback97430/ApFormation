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
    class Course {
        constructor(distance = 0.100) {
            this._nbParticipantPret = 0;
            this._enCour = false;
            this._distanceTotal = 100;
            this._classement = [];
            this._distanceTotal = distance * 1000;
        }
        get listParticipant() {
            return this._listParticipant;
        }
        set listParticipant(listParticipant) {
            this._listParticipant = listParticipant;
            for (let participant of this.listParticipant) {
                participant.affecterCourse(this);
            }
        }
        get enCour() {
            return this._enCour;
        }
        notifierPret() {
            this._nbParticipantPret++;
            if (this._nbParticipantPret == this.listParticipant.length) {
                this._enCour = true;
                for (let participant of this.listParticipant) {
                    participant.demarrer();
                }
                this.compteurCourse(10);
            }
        }
        compteurCourse(tempsAttente) {
            Course._compteurCourse = 10;
            let idInterval = setInterval(() => {
                console.log(Course._compteurCourse);
                Course._compteurCourse--;
            }, 1000);
            setTimeout(() => {
                clearInterval(idInterval);
                this.debutCourse();
            }, (tempsAttente + 2) * 1000);
        }
        debutCourse() {
            console.log("GOGOGO !!");
            for (let participant of this.listParticipant) {
                participant.accelerer();
            }
        }
        avancementCourse(participant) {
            if (participant.distance > this._distanceTotal) {
                participant.stopCourse();
                this._classement.push(participant);
                if (this._classement.length == this.listParticipant.length) {
                    this.finCourse();
                }
            }
        }
        finCourse() {
            console.log("Fin de la course");
            console.log(this._classement);
        }
    }
    Course._compteurCourse = 0;
    exports.default = Course;
});
