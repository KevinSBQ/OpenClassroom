import '../styles/Banner.css'
import logo from '../assets/logo.png'
import Recommendation from './Recommendation'

function Banner() {
    // declaration des varables se situe en dehors de la partie retour des elements
    const title = 'La maison jungle'
    
    return (
        // en react mot cles class devient className

        // une alternative : inline styles,
        // pour effectuer des tests rapide mais pas recommandee dans la realisation
        // pour styliser votre application, privilégiez davantage la méthode des classNames
        /* 

        ATTENTION : text-align devient textAlign
                    32px devient 32
        ON A DONC
        
        <div  style={{
                    color: 'black',
                    textAlign: 'right',
                    padding: 32,
                    borderBottom: 'solid 3px black'
                }}
        >
                <h1>La maison jungle</h1>
        </div>

        */
        <div>
            <div className='lmj-banner'>
                <img src={logo} alt='La maison jungle' className='lmj-logo' />
                <h1 className='lmj-title'>{title}</h1>
            </div>
            <Recommendation/ >
        </div>
    )
}

export default Banner