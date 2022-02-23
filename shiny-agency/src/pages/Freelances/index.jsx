import DefaultPicture from '../../assets/profile.png'
import Card from '../../components/Card'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { useEffect, useState } from 'react'
import { Loader } from '../../utils/style/Atoms'

const freelanceProfiles = [
    {
        name: 'Jane Doe',
        jobTitle: 'Devops',
        picture: DefaultPicture,
    },
    {
        name: 'John Doe',
        jobTitle: 'Developpeur frontend',
        picture: DefaultPicture,
    },
    {
        name: 'Jeanne Biche',
        jobTitle: 'Développeuse Fullstack',
        picture: DefaultPicture,
    },
]

const CardsContainer = styled.div`
    display: grid;
    gap: 24px;
    grid-template-rows: 350px 350px;
    grid-template-columns: repeat(2, 1fr);
`
const PageTitle = styled.h1`
  font-size: 30px;
  color: black;
  text-align: center;
  padding-bottom: 30px;
`

const PageSubtitle = styled.h2`
  font-size: 20px;
  color: ${colors.secondary};
  font-weight: 300;
  text-align: center;
  padding-bottom: 30px;
`
const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`

function Freelances() {

  const [isDataLoading, setDataLoading] = useState(false)
  const [error, setError] = useState(false)
  const [freelancersList, setFreelancesList] = useState([])

  useEffect(() => {
    async function fetchFreelances() {
      setDataLoading(true)
      try {
        const response = await fetch(`http://localhost:8000/freelances`)
        const { freelancersList } = await response.json()
        setFreelancesList(freelancersList)
      } catch (err) {
        console.log('===== error =====', err)
        setError(true)
      } finally {
        setDataLoading(false)
      }
    }
    fetchFreelances()
  }, [])

  if(error) {
    return <span data-testid="error">Oups il y a eu une erreur dans l'API</span>
  }

  return (
          <div>
          <PageTitle>Trouvez votre prestataire</PageTitle>
          <PageSubtitle>Chez Shiny nous réunissons les meilleurs profils pour vous.</PageSubtitle>
          <h1>Freelances 👩·💻👨·💻👩·💻</h1>
          {isDataLoading ? (
            <LoaderWrapper>
              <Loader data-testid="loader" />
            </LoaderWrapper>
              ) : (
              <CardsContainer>
              {freelanceProfiles.map((profile, index) => (
              <Card
                  key={`${profile.name}-${index}`}
                  label={profile.jobTitle}
                  picture={profile.picture}
                  title={profile.name}
              />
              ))}
              </CardsContainer>
              )}
            {error && (<div>Desole, Une erreur est survenue</div>)}
          </div>
        )
}


export default Freelances