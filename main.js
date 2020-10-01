const morceauxPoliticien = [
	[
		'Mesdames, Messieurs,',
		'Je reste fondamentalement persuadé que',
		'Dès lors, sachez que je me battrai pour faire admettre que',
		'C’est en toute connaissance de cause que je peux affirmer aujourd’hui que',
		'Je tiens à vous dire ici ma détermination sans faille pour clamer haut et fort que',
		'J’ai depuis longtemps défendu l’idée que',
		'C’est en toute conscience que je m’engage pour que'
	],
	[
		'la conjoncture actuelle',
		'la situation d’exclusion que certains d’entre vous connaissent,',
		'l’acuité des problèmes de la vie quotidienne',
		'la volonté farouche de sortir notre pays de la crise,',
		'l’effort prioritaire en faveur du statut précaire des exclus,',
		'le particularisme dû à notre histoire unique,',
		'l’aspiration plus que légitime de chacun au renouveau,'
	],
	[
		'doit s’intégrer à la finalisation globale',
		'oblige à la prise ne compte encore plus effective',
		'interpelle le citoyen que je suis et nous oblige tous à aller de l’avant dans la voie',
		'a pour conséquence obligatoire l’urgente nécessité',
		'conforte mon désir incontestable d’aller dans le sens',
		'doit nous amener au choix réellement impératif',
		'doit prendre en compte les besoins'
	],
	[
		'd’un processus allant vers plus d’égalité.',
		'd’un avenir s’orientant vers plus de progrès et plus de justice.',
		'd’une restructuration dans laquelle chacun pourra enfin trouver sa dignité.',
		'd’une valorisation sans concession de nos caractères spécifiques.',
		'd’un plan correspondant veritablement aux exigeances légitimes de chacun.',
		'de solutions rapides correspondant aux grands axes sociaux prioritaires.',
		'd’un programme plus humain, plus fraternel et plus juste.'
	]
];

const morceauxReunion = [
	[
		"L'excellence",
		"L'intervention",
		"L'objectif",
		'Le diagnostic',
		"L'expérimentation",
		'La formation',
		'Le numérique',
		"L'évaluation",
		'La finalité',
		"L'expression",
		'Le management',
		'La méthode',
		'Le vécu',
		'Le recadrage',
		'La pédagogie inversée',
		'la didactique'
	],
	[
		'renforce',
		'mobilise',
		'révèle',
		'stimule',
		'inerve',
		'modifie',
		'renouvelle',
		'bouleverse',
		'clarifie',
		'identifie',
		'perfectionne',
		'développe',
		'dynamise',
		'programme',
		'ponctue'
	],
	[
		'les facteurs',
		'les processus',
		'les paramètres',
		'les changements',
		'les concepts',
		'les savoirs-faire',
		'les penchants',
		'les paradoxes',
		'les problèmes',
		'les indicateurs',
		'les résultats',
		'les effets',
		'les blocages',
		'les besoins',
		'les paradoxes',
		'les enjeux'
	],
	[
		'institutionnels',
		'qualitatifs',
		'analytiques',
		'caractéristiques',
		'motivationnels',
		'pédagogiques',
		'cognitifs',
		'représentatifs',
		'participatifs',
		'cumulatifs',
		'stratégiques',
		'neurolinguistiques',
		'systémiques',
		'diactiques',
		'pédagogiques'
	],
	[
		'de la performance.',
		'du dispositif.',
		"de l'entreprise.",
		'de la communauté éducative.',
		'du groupe.',
		'du collectif pluriprofessionnel.',
		'du projet.',
		'des bénéficiaires.',
		'de la hiérarchie.',
		'des pratiques.',
		'de la démarche.',
		'des acteurs.',
		'de la problématique.',
		'des structures.',
		'du métacontexte.',
		'des priorités.',
		'des élèves.',
		'des apprenants.'
	]
];
// variable dans laquelle on stocke les citations générées
let citations = [];

// fonction qui pioche aleatoirement un élément d'un tableau
function piocher(liste) {
	return liste[Math.floor(Math.random() * liste.length)];
}

// fonction qui génère une citation unique
function genererCitationUnique(morceaux) {
	let citation = '';
	for (let i = 0; i < morceaux.length; i++) {
		let morceau = piocher(morceaux[i]);
		citation = citation + morceau + ' ';
	}
	if (!citations.includes(citation)) {
		citations.push(citation);
	} else {
		genererCitationUnique(morceaux);
	}
	return citation;
}

// fonction qui génère une citation selon le type et la quantité choisi
function generer(type, quantite) {
	citations = [];
	for (i = 0; i < quantite; i++) {
		if (type === 'politicien') {
			citation = genererCitationUnique(morceauxPoliticien);
		} else {
			citation = genererCitationUnique(morceauxReunion);
		}
		afficher(citation);
	}
}

// fonction qui affiche notre citation dans la page web
function afficher(citation) {
	let paragraphe = document.createElement('p');
	let conteneur = document.getElementById('conteneur');
	paragraphe.innerHTML = '"' + citation + '"';
	conteneur.appendChild(paragraphe);
}

// fonction qui execute notre script au clic sur le bouton générer
document.getElementById('generer').addEventListener('click', function(e) {
	e.preventDefault();
	let type = document.getElementById('type').value;
	let quantite = document.getElementById('quantite').value;
	if (quantite < 1 || quantite > 5) {
		alert('nbre citations doit être compris entre 1 et 5');
		return;
	}
	document.getElementById('conteneur').innerHTML = '';
	generer(type, quantite);
});
