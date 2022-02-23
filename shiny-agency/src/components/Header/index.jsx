import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import DarkLogo from '../../assets/dark-logo.png'

// styliser un composent importe : styled(Link)`` plutot que styled.link``
// const StyledLink = styled(Link)`
//     padding: 15px;
//     color: #8186a0;
//     text-decoration: none;
//     font-size: 18px;
// `

// const StyledLink = styled(Link)`
//     padding: 15px;
//     color: #8186a0;
//     text-decoration: none;
//     font-size: 18px;
//     ${(props) =>
//         props.$isFullLink &&
//         `color: white; border-radius: 30px; background-color: #5843E4;`}
// `


// ===> utilise un fichier dedie pour stocke les couleurs utilise
const StyledLink = styled(Link)`
    padding: 15px;
    color: #8186a0;
    text-decoration: none;
    font-size: 18px;
    ${(props) =>
        props.$isFullLink &&
        `color: white; border-radius: 30px; background-color: ${colors.primary};`}
`
// (props) plutot que ({props})

const StyledLogo = styled.img`
  height: 70px;
`

const NavContainer = styled.nav`
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

function Header() {
  return (
    <NavContainer>
      {/* il faut stocker le directory dans une variable DarkLogo plutot que donner directement, sinon ca marche pas */}
      <Link to="/"><StyledLogo src={DarkLogo} alt="logo"/></Link>
      <div>
        <StyledLink to="/">Accueil</StyledLink>
        {/* 
        <StyledLink to="/survey/2" $isFullLink>Questionnaire2</StyledLink>
        <StyledLink to="/survey/3" $isFullLink>Questionnaire3</StyledLink> 
        */}
        <StyledLink to="/freelances">Profils</StyledLink>
        <StyledLink to="/survey/1" $isFullLink>Faire le test</StyledLink>
      </div>
    </NavContainer>
  )
}

// on passe la prop $isFullLink. Ce qui nous permet d'utiliser la prop directement dans le style

// Ce  $  est uniquement nécessaire pour passer une prop si le composant en question est un composant React, comme ici pour  Link  (et non un élément HTML).
// ex: Link base sur ReactApp : $isFullLink
// ex: a    base sur HTML     :  isFullLink
export default Header