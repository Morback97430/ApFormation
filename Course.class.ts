import Participant from './participant/Participant.class';

export default class Course{
	private _listParticipant:Array<Participant>;
	private _nbParticipantPret:number = 0;
	private _enCour:boolean = false;

	private _distanceTotal:number = 100;

	private _classement:Array<Participant> = [];

	private static _compteurCourse:number = 0;

	constructor(distance = 0.100){
		this._distanceTotal = distance * 1000;
	}

	get listParticipant():Array<Participant>{
		return this._listParticipant;
	}

	set listParticipant(listParticipant:Array<Participant>){
		this._listParticipant = listParticipant;

		for(let participant of this.listParticipant){
			participant.affecterCourse(this);
		}
	}

	get enCour():boolean{
		return this._enCour;
	}

	notifierPret(){
		this._nbParticipantPret++;

		if(this._nbParticipantPret == this.listParticipant.length){
			this._enCour = true;

			for(let participant of this.listParticipant){
				participant.demarrer();
			}
			this.compteurCourse(10);
		}
	}

	compteurCourse(tempsAttente:number){
		Course._compteurCourse = 10;
		let idInterval = setInterval(()=>{
			console.log(Course._compteurCourse);
			Course._compteurCourse--;
		}, 1000);

		setTimeout(()=>{
			clearInterval(idInterval);
			this.debutCourse();
		}, (tempsAttente + 2) * 1000);
	}

	debutCourse(){
		console.log("GOGOGO !!");
		for(let participant of this.listParticipant){
			participant.accelerer();
		}

	}

	avancementCourse(participant:Participant){
		if(participant.distance > this._distanceTotal){
			participant.stopCourse();
			this._classement.push(participant);

			if(this._classement.length == this.listParticipant.length){
				this.finCourse();
			}
		}
	}

	finCourse(){
		console.log("Fin de la course");
		console.log(this._classement);
	}
}