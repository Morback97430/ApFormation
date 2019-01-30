import Vehicule from './Vehicule.class';

export default class Camion extends Vehicule{
	constructor(){
		super();

		this.klaxon = "bip (de Camion)";
		this.capaciteReservoir = 200;
		this.initialiseCarburant();

		this.defineConso();
		this.defineVitesseMax();
	}

	defineConso(){
		this.consoCarburant = Math.random() * 10 + 15;
	}

	defineVitesseMax(){
		this.vitesseMax = Math.random() * 30 + 130;
	}
}
