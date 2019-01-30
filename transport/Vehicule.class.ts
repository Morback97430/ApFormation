import Participant from '../participant/Participant.class';

import Course from '../Course.class';

export default abstract class Vehicule{
	private _typeVehicule:string;
	private _capaciteReservoir:number;
	private _niveauCarburant:number;
	private _consoCarburant:number;
	private _vitesseMax:number;
	private _klaxon:string;
	private estDemarer = false;

	private _pilot:Participant;
	private _passagers:Array<Participant>;

	abstract defineConso():void;
	abstract defineVitesseMax():void;

	constructor(){
		// défini le type de véhicule
		this.typeVehicule = this.constructor.name;
	}



	get typeVehicule():string{
		return this._typeVehicule;
	}

	get capaciteReservoir():number{
		return this._capaciteReservoir;
	}

	get niveauCarburant():number{
		return this._niveauCarburant;
	}

	get consoCarburant():number{
		return this._consoCarburant;
	}

	get vitesseMax():number{
		return this._vitesseMax;
	}

	get klaxon():string{
		return this._klaxon;
	}

	get pilot():Participant{
		return this._pilot;
	}

	set typeVehicule(defTypeVeh:string){
		this._typeVehicule = defTypeVeh;
	}

	set capaciteReservoir(capacite:number){
		this._capaciteReservoir = capacite;
	}

	set niveauCarburant(niveau:number){
		this._niveauCarburant = niveau;
	}

	set consoCarburant(conso:number){
		this._consoCarburant = conso;
	}

	set vitesseMax(vitesse:number){
		this._vitesseMax = vitesse;
	}

	set klaxon(son:string){
		this._klaxon = son;
	}

	set pilot(pilot:Participant){
		this._pilot = pilot;
	}

	initialiseCarburant(){
		this.niveauCarburant = Math.random() * this.capaciteReservoir;
	}

	rajoutCarburant(carburant:number){ // ? => instancie un niveau de Carburant // number => rajoute du carburant // String => "PLEIN" remplie à fond
		this.niveauCarburant += carburant;
		this.niveauCarburant = (this.niveauCarburant > this.capaciteReservoir) ? this.capaciteReservoir: this.niveauCarburant;
	}

	consomeCarburant(carburant:number){
		this.niveauCarburant -= carburant;
		this.niveauCarburant = (this.niveauCarburant <= 0) ? 0 : this.niveauCarburant;

		if(this.niveauCarburant == 0){
			this.arreter();
		}
	}

	async pleinEssence(){
		while(this.niveauCarburant < this.capaciteReservoir){
			await this.remplissage(1);
		}
		this.klaxonner();

		if(!this.pilot.enCour()){
			this.pilot.notifierPret();
		}
	}

	remplissage(quantite:number):Promise<void>{
		this.rajoutCarburant(quantite);

		return new Promise<void>(resolve => {
			setTimeout(resolve, 500);
		});
	}

	async demarrer(){
		this.estDemarer = true;
		while(this.estDemarer){
			await this.vidage(0.1);
		}
	}

	vidage(quantite:number){
		this.consomeCarburant(quantite);

		return new Promise<void>(resolve => {
			setTimeout(resolve, 1000);
		});
	}

	arreter(){
		this.estDemarer = false;
	}

	klaxonner(){
		console.log(this.klaxon);
	}

	pret():boolean{
		return this.niveauCarburant == this.capaciteReservoir;
	}

	afficheType(){
		console.log(this.typeVehicule);
	}

	rouler(){
		if(this.estDemarer == true){
			this.consomeCarburant(this.conso());
			this.pilot.avance(this.distance());
		}else if(this.niveauCarburant == 0){
			this.pleinEssence();
			this.estDemarer = false;
		}else if(this.niveauCarburant == this.capaciteReservoir){
			this.estDemarer = true;
		}

		//console.log(this.niveauCarburant);
	}

	distance(){
		return this.vitesseMax * 1000 / 3600000;
	}

	conso(){
		return this.consoCarburant * 1000 / 3600000;
	}
}