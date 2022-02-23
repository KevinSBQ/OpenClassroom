import { useState } from 'react'

// formulaire controlee
// permet d'interagir directement avec la donnée renseignée par l'utilisateur.

function QuestionForm() {
    /* permet de déclarer l'état initial pour inputValue
    et la fonction correspondante pour la modifier */
    const [inputValue, setInputValue] = useState('Posez votre question ici')
    /* Le state local nous permet de garder des informations spécifiques à un composant
    et elles proviennent d'une interaction que l'utilisateur a eue avec le composant. */
    
    // inputValue a maintenant accès au contenu de mon input à tout moment.


    // ici, vous aurez beau marteler votre touche 't' autant de fois que vous voudrez, la valeur ne s'inscrira pas dans votre input.
    function checkValue(value) {
        if (!value.includes('h')) {
            setInputValue(value)
        }
    }
    // vers isInputError obtenu oar inputValue, on affiche un message d'erreur en fonction de ce booléen
    const isInputError = inputValue.includes('f')
    return (
        <div>
            <textarea
                value={inputValue}
                // parametre : e, return: setInputValue(e.target.value)
                onChange={(e) => checkValue(e.target.value)}
                // onChange={(e) => setInputValue(e.target.value)}
            />
            {isInputError && (
            <div>🔥 Vous n'avez pas le droit d'utiliser la lettre "f" ici.</div>
            )}
            <button onClick={() => alert(inputValue)}>Alertez moi 🚨</button>
        </div>
    )
}

export default QuestionForm

/*Eh bien cela dépend des cas. À vous de voir selon vos contraintes.
 Quand vous avez un composant rapide à faire, qui n'intègre aucune complexité, 
 un input non contrôlé peut faire l'affaire. 
 À l'inverse, si vous avez des vérifications à faire, 
 il vaudra sûrement mieux passer par un composant contrôlé. 
 Pour ma part, j'ai vu beaucoup plus de composants contrôlés dans les codebases que j'ai pu voir. */

 // react-hook-form