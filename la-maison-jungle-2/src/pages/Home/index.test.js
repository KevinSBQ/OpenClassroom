// JEST

import {sum} from './'

test('Fonction sum', () => {
    const result = sum(3, 7)
    expect(result).toBe(10)
})

// npm run test dans la console