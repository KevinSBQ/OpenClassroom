import PropTypes from 'prop-types'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

// generer des elements span et img auxquels on applique du style avec styled-components
const CardLabel = styled.span`
color: #5843e4;
font-size: 22px;
font-weight: bold;
`
const CardImage = styled.img`
    height: 80px;
    width: 80px;
    border-radius: 50%;
`
const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 15px;
    background-color: ${colors.backgroundLight};
    border-radius: 30px;
    width: 350px;
    transition: 200ms;
    &:hover {
        cursor: pointer;
        box-shadow: 2px 2px 10px #e2e3e9;
    }
`
// &:hover nous permet d'accéder au pseudosélecteur du survol de la souris
// & est aussi utiliser pour accéder à d'autres éléments.
// Notamment si un de nos composants a une className et qu'on ne peut pas accéder directement à son style.
// https://styled-components.com/docs/basics#pseudoelements-pseudoselectors-and-nesting

// Pour styliser un element d'une bibliotheque:
// exemple dans Header/index

// il est ossible de declarer un objet Card.defaultProps
//      function Card({label, title = 'Titre par defaut', picture})
// le syntax au-dessus decenche une erreur de PropType

function Card({ label, title, picture }) {
    return (
        <CardWrapper>
            <CardLabel>{label}</CardLabel>
            <CardImage src={picture} alt="freelance" />
            <span>{title}</span>
        </CardWrapper>
    )
}

// mporter  PropTypes  depuis la bibliothèque
// et utiliser  Card.propTypes  pour préciser les types de chacune des propriétés.
Card.propTypes = {
    label: PropTypes.string.isRequired,
    // title: PropTypes.string,
    title: PropTypes.string.isRequired,
    // exigez une prop : warning si pas declare
    picture: PropTypes.string.isRequired,
    // avec propTypes, si on passe par exemple title={42} dans freelances/index.jsx, il y aura un warning
}

Card.defaultProps = {
    title: 'Titre par default',
    label: 'Position par deafult',
    picture: '/assets/profile.png'
}
 
export default Card

// À l’avenir, vous devrez typer toutes les props de vos composants dans notre application.


// CODE BASE SUR TYPESCRIPT AU LIEU DE PROPTYPE:
// interface CardProps {
//     label: string
//     title: string
//     picture: string
//   }
  
//   function Card({ label, title, picture }: CardProps) {
//     return (
//       <div style={{ display: 'flex', flexDirection: 'column', padding: 15 }}>
//         <span>{label}</span>
//         <img src={picture} alt="freelance" height={80} width={80} />
//         <span>{title}</span>
//       </div>
//     )
//   }
  
//   export default Card



//  CSS IN JS 
// a ne pas confondre:
// inline sytle: <div style={{ color: 'red' }} />
// element sytle a inserer dans le DOM: <style>

// on garde l'idée que le style est attaché à un composant spécifique