import { useEffect, useState } from 'react'
import '../styles/Footer.css'

function Footer() {
	const [inputValue, setInputValue] = useState('')

    // useEffect(()=> {
    //     console.log(`s'affiche a chaque rendu du composant`)
    // })
    
    // useEffect(()=> {
    //     console.log(`s'affiche a premier rendu du composant`)
    // }, [])

    // useEffect(()=> {
    //     console.log(`s'affiche a premier rendu du composant et chaque fois le panier est mis a jour`)
    // }, [cart])

    useEffect(() => {
        return () =>
            console.log(`s'affiche quand l'element est retire du DOM`)
    })

	function handleInput(e) {
		setInputValue(e.target.value)
	}

	function handleBlur() {
		if (!inputValue.includes('@')) {
			alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide 😥")
		}
	}

	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
			<input
				placeholder='Entrez votre mail'
				onChange={handleInput}
				value={inputValue}
				onBlur={handleBlur}
			/>
            {!inputValue.includes('@') && (<div>pas une adresse valide !</div>)}
		</footer>
	)
}

export default Footer

/*
QUIZ

package.json a une importance particulière puisqu'il permet de
Gérer les dépendances.
Gérer les scripts.
Lancer les tests automatisés.
Lancer le build de l’application.

<ul>
    {categories.map((category, index) => <li key={`${category}-${index}`}>
    {category}
    </li>;)}
</ul>
permet de créer un composant qui génère facilement et proprement une liste d'éléments React

function Layout(props) {
    const children = props.children
    return <div className="my-layout">{children}</div>
}
bon

function Layout(children) {
    return <div className="my-layout">{children}</div>
}
children corresponds a props -> erreur

function Layout({children}) {
    return <div className="my-layout">{children}</div>
}
bon
*/