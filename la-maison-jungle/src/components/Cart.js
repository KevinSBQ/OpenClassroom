import '../styles/Cart.css'

// 在该组件提交时自动执行useEffect函数
// useEffect nous permet d'effectuer notre effet une fois le rendu du composant terminé.
import { useState, useEffect } from 'react'

// transfere des parametes en props
// fait decendre les params car et updateCart de App.js a ici
function Cart({cart, updateCart}) {

    // state cart, updateCart une fonction pour mettre a jour ce state
    // valeur initial de state : 0
    
    // const [cart, updateCart] = useState(0) // fait remonte dans App.js

    // décomposition: (!destructuration) s'agit d'un tableau non un objet
    /*useState est un hook qui permet d’ajouter le state local React à des composants fonctions.*/
    /*
    equivalence:
    const cartState = useState(0)
    const cart = cartState[0]
    const updateCart = cartState[1]
    */
   // bouton (afficher/chacher) pour ouverture/fermeture de panier
    const [isOpen, setIsOpen] = useState(true)

    const total = cart.reduce(
        (acc, plantType) => acc + plantType.amount * plantType.price, 0
    )

    // Le deuxième paramètre de useEffect accepte un tableau noté entre crochets : il s'agit du tableau de dépendances.
    /*
        AFFICHER UNE ALERTE
        useEffect(() => {
            alert(`J'aurai ${total}€ à payer 💸`)}, [total]
        )

    */

        /* AFFICHER DANS LE TITRE */
        useEffect(() => {
            document.title = `LMJ: ${total}€ d'achats`
        }, [total])
    // alert(`J'aurai ${total}€ à payer 💸`)
    return isOpen ? (
        <div className='lmj-cart'>
            <button onClick={() => setIsOpen(false)}>Fermer le panier</button>
            <h2>Panier</h2>
            <ul>
            {
                cart.map(({name, price, amount}, index) => (
                    <div key={`${name}-${index}`}>
                        {name} {price} EUR. X {amount}
                    </div>
                ))
            }
            </ul>
            <h3>Total : {total}€</h3>
            <button onClick={() => {updateCart([]);alert('Panier valide ! Merci !')}}>Valider le Panier</button>
        </div>
    ) : (
        <button onClick={() => setIsOpen(true)}>Ouvrir le Panier</button>
    )
    }

    /* LE BUTTON NE RESTE PLUS DANS LE PANIER, MAIS DANS ShoppingList.js
                <button onClick={() => updateCart(cart + 1)}>
                    Ajouter
                </button>
    */

    /*il faudra faire remonter ces données vers le state local du plus proche composant qui est un parent commun, et y garder le state.*/
    /*
    1. Faire redescendre ces infos avec des props jusqu’aux composants qui en ont besoin.
    2. Faire « remonter » les demandes d'update toujours dans les props. Pour cela, on peut utiliser la fonction de mise à jour du state récupérée dans useState, en la passant en props aux composants qui en ont besoin.
    */
export default Cart