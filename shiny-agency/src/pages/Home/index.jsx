// fichier .jsx pour dire explicitement que le fichier contient du React

// decoupage selon les types/fonctionnalites de fichiers/principes de l'atomic design

// ESLint: signaler des erreurs dans le code aussi bien des erreurs de style
// Prettier: formater

// classique => Single Page Application (SPA) | requete-html-post-html  => requete-htm&js-ajax-json
// inconvénients : impérativement avoir JavaScript, plus laborieux au niveau du Search Engine Optimisation

// une route permet d'afficher des composants de manière conditionnelle, si le path (chemin) de l'URL correspond au path de la route

import { useState } from 'react'
import styled from 'styled-components'
// import Balloon from '../../components/Ballon'
const HomeContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`
// on n'a pas besoin de fichier Ballon/index puisque le Ballon derive directement de div, qui existe dans HTML
const Ballon = styled.div`
  height: 100px;
  width: 100px;
  border-radius: 50px;
  background-color: #e20202;
  transform: scale(${({size}) => size})
` 
// utiliser la propiete transform avec scale ,qui recupere le state est modifier le size

export function sum(a, b) {
  return a + b
}

function Home() {
  // console.log(ceciEstUneErreur) //reporter par ESLint
  const [size, setSize] = useState(1)
  return (
    <HomeContainer>
      {/* passer le state a notre style Component Ballon qui modifier le component Balloon (<div><div/>)  */}
      <h1 onClick={() => setSize(size + 0.1)}>Home Page</h1>
      <Ballon size={size}/>
    </HomeContainer>
  )
}

export default Home;
