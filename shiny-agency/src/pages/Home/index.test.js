// JEST

import {sum} from './'
import {MemoryRouter} from 'react-router-dom'
// react testing library
import {render, screen} from '@testing-library/react'
import Home from './'
import {ThemeProvider} from '../../utils/context'

describe('The Home component', () => {
it('shoud render title', () => {
    render(
        <MemoryRouter>
            <ThemeProvider>
                <Home />
            </ThemeProvider>
        </MemoryRouter>
    )
    // getByTest / getByRole
    // expect(
    //     screen.getByTest(
    //         '<h1>Home Page<h1>'
    //     )
    // )
    expect(
        screen.getByRole('heading', {level: 1, text: 'Home Page'}))
        // screen.debug()
})

})


test('Fonction sum', () => {
    const result = sum(3, 7)
    expect(result).toBe(10)
})

// npm run test dans la console


