// créer notre Provider de Contexte
import { createContext } from "react";
import { useState } from "react";

// initialiser le theme pour le context
export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
    
    const [theme, setTheme] = useState('light')
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }
 
    // tous les composants enfants qui se retrouvent englobés
    // (dans ce cas dans index racine) par le Provider
    // vont pouvoir accéder à theme et toggleTheme
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

///////////

export const SurveyContext = createContext()

export const SurveyProvider = ({ children }) => {
  const [answers, setAnswers] = useState({})
  const saveAnswers = (newAnswers) => {
    setAnswers({ ...answers, ...newAnswers })
  }

  return (
    <SurveyContext.Provider value={{ answers, saveAnswers }}>
      {children}
    </SurveyContext.Provider>
  )
}