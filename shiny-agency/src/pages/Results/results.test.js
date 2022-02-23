// Notez ici que Jest ne rend pas la main : 
// il est en mode "watch", c’est-à-dire qu’il surveille vos fichiers et relance les tests appropriés si besoin.

import { formatJobList } from './'
 
describe('La fonction formatJobList', () => {

    test('ajoute une virgule à un item', () => {
    const expectedState = 'item2,'
    expect(formatJobList('item2', 3, 1)).toEqual(expectedState)
})
test('ne met pas de virgule pour le dernier élément', () => {
    const expectedState = 'item3'
    expect(formatJobList('item3', 3, 2)).toEqual(expectedState)
})
})


// npm run test