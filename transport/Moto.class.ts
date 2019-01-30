import Vehicule from './Vehicule.class';

export default class Moto extends Vehicule{
	constructor(){
		super();

		this.klaxon = "bip (de Moto)";
		this.capaciteReservoir = 30;
		this.initialiseCarburant();

		this.defineConso();
		this.defineVitesseMax();
	}

	defineConso(){
		this.consoCarburant = Math.random() * 8 + 12;
	}

	defineVitesseMax(){
		this.vitesseMax = Math.random() * 50 + 200;
	}
}