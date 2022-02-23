import CareScale from './CareScale';

function handleClick(plantName,plantLight,plantWater) {
    // console.log('✨ Ceci est un clic ✨')
    let level = ['peu','moderement','beaucoup']

    alert(`Vous voulez acheter 1 ${plantName} ? Très bon choix 🌱✨ Cette plante requiert ${level[plantLight-1]} de lumiere et ${level[plantWater-1]} d'arrosage`)
    console.log('Ceci est mon event: ',plantName)
}

/*

function handleClick(e) {
    console.log('✨ Ceci est mon event :', e)
}

*/

// onClick: React passe par défaut un objet, mais ici nous voulons lui spécifier notre propre argument
// s'il s'agit d'un objet (e), on aura des methodes preventDefault() et stopPropagation()
// evenement synthetique

// lorsqu'un événement est déclenché, 
// il est d'abord reçu par l'élément cible, 
// mais il est ensuite remonté vers les éléments parents qui sont aussi dans la cible.

/*
    elementInterieur.addEventListener('click', function(event) {
    event.stopPropagation();
    elementAvecMessage.innerHTML = "Message de l'élément intérieur";
});
*/
function PlantItem({name, cover, id, light, water}){
    return (
		<li key={id} className='lmj-plant-item' onClick={() => handleClick(name,light,water)}>
			<img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
			{name}
			<div>
				<CareScale careType='water' scaleValue={water} />
				<CareScale careType='light' scaleValue={light} />
			</div>
		</li>
    )
}

export default PlantItem