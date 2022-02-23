import Footer from './'
import { render, screen } from '@testing-library/react'
 
// assurer que Footer render bien, sans crasher
// Notre composant fait partie d'un ensemble qui utilise le Contexte… 
// Or, ici, notre composant n'est pas englobé par notre Provider de thème light  /  dark  .


// describe('Footer', () => {
//     test('Should render without crash', async () => {
//         render(<Footer />)
//     })
// })

import { ThemeProvider } from '../../utils/context'
import { fireEvent } from '@testing-library/react'

describe('Footer', () => {
    test('Should render without crashing', async () => {
        render(
            <ThemeProvider>
                <Footer />
            </ThemeProvider>
        )
    })
    test('Change theme', async () => {
        render(
            <ThemeProvider>
                <Footer />
            </ThemeProvider>
        )
        const nightModeButton = screen.getByRole('button')
    })
    test('Change theme', async () => {
        render(
            <ThemeProvider>
                <Footer />
            </ThemeProvider>
        )
        const nightModeButton = screen.getByRole('button')
        expect(nightModeButton.textContent).toBe('Changer de mode : 🌙')
    })

    // fireEvent qui va nous permettre de déclencher des événements du DOM, ici click

    test('Change theme', async () => {
        render(
            <ThemeProvider>
                <Footer />
            </ThemeProvider>
        )
        const nightModeButton = screen.getByRole('button')
        expect(nightModeButton.textContent).toBe('Changer de mode : 🌙')
        fireEvent.click(nightModeButton)
        expect(nightModeButton.textContent).toBe('Changer de mode : ☀️')
    })
})