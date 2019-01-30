import Vehicule from './Vehicule.class';

export default class Voiture extends Vehicule{
	constructor(){
		super();

		this.klaxon = "bip (de Voiture)";
		this.capaciteReservoir = 50;
		this.initialiseCarburant();

		this.defineConso();
		this.defineVitesseMax();
	}

	defineConso(){
		this.consoCarburant = Math.random() * 10 + 15;
	}

	defineVitesseMax(){
		this.vitesseMax = Math.random() * 50 + 150;
	}
}