import Vehicule from '../transport/Vehicule.class';

import Course from '../Course.class';

export default class Participant{
	private _course:Course;
	private _vehicule:Vehicule;

	private _distanceParcouru:number = 0;
	private _surCircuit?:number = undefined;

	get course():Course{
		return this._course;
	}

	get vehicule():Vehicule{
		return this._vehicule;
	}

	get distance():number{
		return this._distanceParcouru;
	}

	set vehicule(vehicule:Vehicule){
		this._vehicule = vehicule;
	}

	affecterCourse(course:Course){
		this._course = course;
	}

	demarrer(){
		this.vehicule.demarrer();
	}

	enCour():boolean{
		return this.course.enCour;
	}

	notifierPret(){
		this.course.notifierPret();
	}

	accelerer(){
		this._surCircuit = setInterval(()=>{
			this.vehicule.rouler();
		});
	}

	freiner(){
		clearInterval(this._surCircuit);
	}

	avance(distance:number){
		this._distanceParcouru += distance;
		this.course.avancementCourse(this);
		console.log(this._distanceParcouru);	
	}

	stopCourse(){
		this.freiner();
		this.vehicule.arreter();
	}
}