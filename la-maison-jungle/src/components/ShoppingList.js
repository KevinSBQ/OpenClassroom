import '../styles/ShoppingList.css';
import CareScale from './CareScale';
import PlantItem from './PlantItem';
import Categories from './Categories'
import { useState } from 'react'
/*
const plantList = [
    'monstera',
    'ficus lyrata',
    'pothos argenté',
    'yucca',
    'palmier'
]
*/

// on stock les infomation des plantes dans le fichier plant
import { plantList } from '../datas/plantList'


// methdoes : map(), 
// methodes arrays utiles : forEach(), filter(), reduce()
// exemple forEach
/*
var items = ["item1", "item2", "item3"]
var copie = [];

items.forEach(function(item){
  copie.push(item);
});
*/


// UTILISATION DU MAP
/*
    map()  passe sur chaque élément d'un tableau.
    Elle lui applique une fonction, et renvoie un nouveau tableau

    const numbers = [1, 2, 3, 4]
    const doubles = numbers.map(x => x * 2) // [2, 4, 6, 8]

*/

/*
LA VERSION SANS KEY

function ShoppingList() {
    return (
        <ul>
            {plantList.map((plant) => (
                <li>{plant}</li>
            ))}
        </ul>
    )
}

*/

function ShoppingList({cart, updateCart}) {
    // acc stands for accumulator
    // accumulator : La valeur précédemment retournée par le dernier appel du callback
    // ou valeurInitiale, si elle est fournie
    // ici, il est fournie par []

    
    const [activeCategory, setActiveCategory] = useState('')
    let categories = [];
    plantList.forEach(function (plant){
        if (!categories.includes(plant.category))
        categories.push(plant.category);
    });

    
    /*
    const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)
    */
    // 意为检查上一（accumulator）元素是否包含当前元素的categoty
    // 若包含则返回同一accumulator（即accumulator中的元素保持不变）
    // 若不包含则添加当前元素中的新category
    // 实现的功能为：提取且仅提取一次category
    // Array.prototype.includes() permet de déterminer si un tableau contient une valeur et renvoie true si c'est le cas, false sinon
    // Array.prototype.concat() combine deux arrays 

    function addToCart(name, price) {
        // 数组各元素命名为plant
		const currentPlantSaved = cart.find((plant) => plant.name === name)
		if (currentPlantSaved) {
            // 过滤保留除了当前植物外的其他植物
			const cartFilteredCurrentPlant = cart.filter(
				(plant) => plant.name !== name
			)
            // 当前植物加更改数量
			updateCart([
				...cartFilteredCurrentPlant,
				{ name, price, amount: currentPlantSaved.amount + 1 }
			])
		} else {
            // 加入新植物数量为 1
			updateCart([...cart, { name, price, amount: 1 }])
		}
	}

    return (
		<div>
			<ul>
				{categories.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
			</ul>
			<ul className='lmj-plant-list'>
				{plantList.map((plant) => (
					<li key={plant.id} className='lmj-plant-item'>
                        {plant.name}
                        {plant.isSpecialOffer && <div className='lmj-sales'>Soldes🎉</div>}
                        {plant.isBestSale ? <span>🔥</span> : <span>👎</span>}
                        <CareScale careType='water' scaleValue={plant.water} />
                        <CareScale careType='light' scaleValue={plant.light} />
                    </li>
				))}
			</ul>
		    <div className='lmj-shopping-list'>
			<Categories
				categories={categories}
				setActiveCategory={setActiveCategory}
				activeCategory={activeCategory}
			/>

			<ul className='lmj-plant-list'>
				{plantList.map(({ id, cover, name, water, light, price, category }) =>
					!activeCategory || activeCategory === category ? (
						<div key={id}>
							<PlantItem
								cover={cover}
								name={name}
								water={water}
								light={light}
								price={price}
							/>
							<button onClick={() => addToCart(name, price)}>Ajouter</button>
						</div>
					) : null
				)}
			</ul>
		    </div>
        </div>
	)
    // produit isBestSale 🔥
    // produit isBestSale et classique 🙌
    // produit isBestSale ou produit classique ✨
    // {plant.isBestSale && plant.category === "classique" && <span>🙌</span>}
    // {(plant.isBestSale || plant.category === "classique") && <span>✨</span>}

    // 使用CareScale元素时传入参数 careType和scaleValue 元素内容由传入的参数决定
    // careType决定 阳光或水分指标
    // scaleValue决定 所需含量大小

    /* easy way to affect keys of map
    return (
        <ul>
            {plantList.map( (plant, index) => (
                <li key={`${plant}-${index}`}> { plant } </li>
            ) )}
        </ul>
    )
    */
}
// pour chaque entrée du tableau, on retourne un élément  <li>

export default ShoppingList

// Warning: Each child in a list should have a unique "key" prop.

/*
    Nous avons plusieurs méthodes pour générer une  key   unique :
    La méthode la plus simple et la plus fiable consiste à utiliser l'id associée à votre donnée dans votre base de données.
    Vous pouvez également trouver un moyen d'exploiter la valeur de la donnée, si vous avez la certitude qu'elle sera toujours unique, et stable dans le temps.
    En dernier recours, vous pouvez définir une string et la combiner avec l'index de la data dans votre tableau.
*/

// Dans notre cas, puisqu'il n'y a pas d'id associée, 
// on peut faire une combinaison entre l'index et le nom de la plante qui est une string :