import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { Loader } from '../../utils/style/Atoms'
import { useContext } from 'react'
import { SurveyContext } from '../../utils/context'
import { useFetch } from '../../utils/hooks'

const SurveyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const QuestionTitle = styled.h2`
  text-decoration: underline;
  text-decoration-color: ${colors.primary};
`

const QuestionContent = styled.span`
  margin: 30px;
`

const LinkWrapper = styled.div`
  padding-top: 30px;
  & a {
    color: black;
  }
  & a:first-of-type {
    margin-right: 20px;
  }
`
const ReplyBox = styled.button`
  border: none;
  height: 100px;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.backgroundLight};
  border-radius: 30px;
  cursor: pointer;
  box-shadow: ${(props) =>
    props.isSelected ? `0px 0px 0px 2px ${colors.primary} inset` : 'none'};
  &:first-child {
    margin-right: 15px;
  }
  &:last-of-type {
    margin-left: 15px;
  }
`

const ReplyWrapper = styled.div`
  display: flex;
  flex-direction: row;
`

function Survey() {
  // useParams() permet de recuperer le(les)parametres declarer dans Route
  const { questionNumber } = useParams()
  // La fonction parseInt() analyse une chaîne de caractère fournie en argument et renvoie un entier exprimé dans une base donnée.
  const questionNumberInt = parseInt(questionNumber)
  const prevQuestionNumber = questionNumberInt === 1 ? 1 : questionNumberInt - 1
  const nextQuestionNumber = questionNumberInt + 1
  const [surveyData, setSurveyData] = useState({})
  const [isDataLoading, setDataLoading] = useState(false)
  const [error, setError] = useState(false)

  const { answers, saveAnswers } = useContext(SurveyContext)

  function saveReply(answer) {
    saveAnswers({ [questionNumber]: answer })
  }

    /* utilisation de Promises VERSION fetch().then() */
//     useEffect(() => {
//     setDataLoading(true)
//     fetch(`http://localhost:8000/survey`)
//     .then((response) => response.json())
//     .then(({ surveyData }) => {
//     setSurveyData(surveyData)
//     setDataLoading(false)
//     })
// }, [])

    // useEffect(()=> {
    //     console.log(`s'affiche a chaque rendu du composant`)
    // })
    
    // useEffect(()=> {
    //     console.log(`s'affiche a premier rendu du composant`)
    // }, [])

    // useEffect(()=> {
    //     console.log(`s'affiche a premier rendu du composant et chaque fois le panier est mis a jour`)
    // }, [cart])


    /*
        utilisation de Promises VERSION async-try-catch-finally
        FONCTION ASYNC : CF WEB_17.JS
        VERSION PLUS MODERNE DEPUIS ES7 */

    useEffect(() => {
    async function fetchSurvey() {
      setDataLoading(true)
      try {
        const response = await fetch(`http://localhost:8000/survey`)
        // il faut destructurer( {} ) les proprietes d'objet retournees
        const { surveyData } = await response.json()
        setSurveyData(surveyData)
      } catch (err) {
        console.log(err)
        setError(true)
      } finally {
        setDataLoading(false)
      }
    }
    fetchSurvey()
  }, [])

    /* VERSION ANCIENNE
  return (
    <div>
      <h1>Questionnaire 🧮</h1>
      <h2>Question {questionNumber}</h2>
      <h3>{surveyData[questionNumber]}</h3>
      <Link to={`/survey/${prevQuestionNumber}`}>Précédent</Link>
      {questionNumberInt === 10 ? (
        <Link to="/results">Résultats</Link>
      ) : (
        <Link to={`/survey/${nextQuestionNumber}`}>Suivant</Link>
      )}
    </div>
  )
  */

  if (error) {
    return <span>Oups il y a eu un problème</span>
  }

  /* VERSION METTRE A JOUR LES STYLES */
  /* et LES BOXES DE REPONSES */
  return (
    <SurveyContainer>
      <QuestionTitle>Question {questionNumber}</QuestionTitle>
      {isDataLoading ? (
        <Loader />
      ) : (
        <QuestionContent>{surveyData[questionNumber]}</QuestionContent>
      )}
      <ReplyWrapper>
        <ReplyBox
          onClick={() => saveReply(true)}
          isSelected={answers[questionNumber] === true}
        >
          Oui
        </ReplyBox>
        <ReplyBox
          onClick={() => saveReply(false)}
          isSelected={answers[questionNumber] === false}
        >
          Non
        </ReplyBox>
      </ReplyWrapper>
      <LinkWrapper>
        <Link to={`/survey/${prevQuestionNumber}`}>Précédent</Link>
        {surveyData[questionNumberInt + 1] ? (
          <Link to={`/survey/${nextQuestionNumber}`}>Suivant</Link>
        ) : (
          <Link to="/results">Résultats</Link>
        )}
      </LinkWrapper>
    </SurveyContainer>
  )
}
export default Survey