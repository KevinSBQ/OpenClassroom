import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { waitFor, screen, waitForElementToBeRemoved } from '@testing-library/react'
import { render } from '../../utils/test'
 
import Freelances from './'
import { ThemeProvider } from '../../utils/context'

// une liste d’objets pour notre mock
const freelancersMockedData = [
    {
        name: 'Harry Potter',
        job: 'Magicien frontend',
        picture: '',
    },
    {
        name: 'Hermione Granger',
        job: 'Magicienne fullstack',
        picture: '',
    },
]
 
const server = setupServer(
    // On précise ici l'url qu'il faudra "intercepter"
    rest.get('http://localhost:8000/freelances', (req, res, ctx) => {
        // Là on va pouvoir passer les datas mockées dans ce qui est retourné en json
        // MOCK : OBJET SIMULE CHERCHANT A REPRODUIRE LE COMPORTEMENT D'UN SYSTEME
        return res(ctx.json({ freelancersList: freelancersMockedData }))
    })
)
 
// Ici,  beforeAll  ,  beforeEach  et  afterEach  n'ont pas besoin d'être importés, ils font partie de l'environnement global de Jest

// Active la simulation d'API AVANT LES TESTS depuis server
beforeAll(() => server.listen())
// Réinitialise tout ce qu'on aurait pu ajouter en termes de durée pour nos tests APRES CHAQUE TEST
afterEach(() => server.resetHandlers())
// Ferme la simulation d'API APRES LES TESTS
afterAll(() => server.close())

test('Should render without crash', async () => {
    render(
        <ThemeProvider>
            <Freelances />
        </ThemeProvider>
    )
    expect(screen.getByTestId('loader')).toBeTruthy()
    // on assure que screen.getByTestId renvoie bien notre element
    await waitForElementToBeRemoved(() => screen.getByTestId('loader'))
    /*
    await waitFor(() => {
        expect(screen.getByText('Harry Potter')).toBeTruthy()
        expect(screen.getByText('Hermione Granger')).toBeTruthy()
    })
    */
})

it('should display error content', async () => {
    server.use(
        rest.get('http://localhost:8000/freelances', (req, res, ctx) => {
            return res.once(
                ctx.status(500),
                ctx.json({
                    errorMessage: `Oups il y a eu une erreur dans l'API`
                })
            )
        })
    )
    render(<Freelances />)
    await waitForElementToBeRemoved(() => screen.getByTestId('loader'))
    expect(screen.getByTestId('error')).toMatchInlineSnapshot()
})