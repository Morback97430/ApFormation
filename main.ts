import Course from './Course.class';

import Participant from './participant/Participant.class';

import Vehicule from './transport/Vehicule.class';

import Voiture from './transport/Voiture.class';
import Moto from './transport/Moto.class';
import Camion from './transport/Camion.class';

let courseDeFou = new Course();

let nbParticipant = 6;


inscriptionParticipant(nbParticipant);

aff("Plein de tous les concurents");

// Functions

function aff(obj){
	console.log(obj);
}

function inscriptionParticipant(nbParticipant = 2){
	let listParticipant:Array<Participant> = [];
	let listVehicule:Array<Vehicule> = [];

	for(let newPerson = 0; newPerson < nbParticipant; newPerson++){
		let nouveauVehicule:Vehicule;
		// Rajout aléatoire de vehicule
		let randomVeh = Math.floor(Math.random() * 3 + 1);

		if(randomVeh == 1){
			nouveauVehicule = new Moto();
		}
		else if(randomVeh == 2){
			nouveauVehicule = new Camion();
		}
		else{
			nouveauVehicule = new Voiture();
		}

		//Inscrit et ratache une Participant à son Vehicule
		let personnePilot:Participant = new Participant();
		listParticipant.push(personnePilot);
		personnePilot.vehicule = nouveauVehicule;

		nouveauVehicule.pilot = personnePilot;
		listVehicule.push(nouveauVehicule);
	}

	courseDeFou.listParticipant = listParticipant;
	for(let vehicule of listVehicule){
		vehicule.pleinEssence();
	}

}