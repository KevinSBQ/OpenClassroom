// creer un composant ClobalStyle pour definir un style global
import { createGlobalStyle } from "styled-components"
import { useContext } from "react"
import { ThemeContext } from "../context"

// composant GlobalStyle dont le background-color est decide par isDarkMode
const StyledGlobalStyle = createGlobalStyle`
    * {
      font-family: 'Trebuchet MS', Helvetica, sans-serif;
    }

    body {
        background-color: ${({ isDarkMode }) => (isDarkMode ? 'black' : 'white')};
        margin: 0;  
    }
`
        /* Ici cette syntaxe revient au même que
        background-color: ${({ props }) =>
        props.isDarkMode ? '#2F2E41' : 'white'};
        */
       
function GlobalStyle() {
    const { theme } = useContext(ThemeContext)

    return <StyledGlobalStyle isDarkMode={theme === 'dark'} />
}

export default GlobalStyle